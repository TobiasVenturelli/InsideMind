import { Resend } from 'resend';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  // Verificar que tenemos la API key
  const apiKey = process.env.RESEND_API_KEY;
  console.log('Verificando API key...');
  console.log('¿Existe API key?:', !!apiKey);

  if (!apiKey) {
    console.error('API key no encontrada en las variables de entorno');
    return NextResponse.json(
      { 
        error: 'Error de configuración del servidor',
        details: 'Por favor, contacta al administrador'
      },
      { status: 500 }
    );
  }

  const resend = new Resend(apiKey);
  console.log('Recibiendo solicitud POST');
  
  try {
    // Validar que la request es correcta
    const contentType = request.headers.get('content-type');
    console.log('Content-Type:', contentType);
    
    if (contentType !== 'application/json') {
      console.error('Content-Type incorrecto:', contentType);
      return NextResponse.json(
        { error: 'Content type debe ser application/json' },
        { status: 400 }
      );
    }

    const rawBody = await request.text();
    console.log('Body recibido:', rawBody);
    
    let body;
    try {
      body = JSON.parse(rawBody);
    } catch (parseError) {
      console.error('Error al parsear JSON:', parseError);
      return NextResponse.json(
        { error: 'Body inválido', details: 'El body debe ser JSON válido' },
        { status: 400 }
      );
    }
    const { name, email, phone, company, service, message } = body;

    // Validar campos requeridos
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Nombre, email y mensaje son requeridos' },
        { status: 400 }
      );
    }

    // Validar formato de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Formato de email inválido' },
        { status: 400 }
      );
    }

    console.log('Enviando email con los siguientes datos:', {
      name,
      email,
      phone,
      company,
      service,
      message
    });

    try {
      const data = await resend.emails.send({
        from: 'InsideMind Agency <onboarding@resend.dev>',
        to: ['venturelliquimey@gmail.com'],
        reply_to: email,
        subject: `Nuevo contacto de ${name}`,
        html: `
<div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
  <div style="max-width: 600px; margin: 0 auto; padding: 20px;">
    <div style="background-color: #f8f9fa; padding: 20px; margin-bottom: 20px; border-radius: 8px;">
      <h2 style="margin: 0; color: #2563eb;">Nuevo mensaje de contacto</h2>
    </div>
    
    <div style="margin-bottom: 20px;">
      <p style="margin-bottom: 10px;"><strong>Nombre:</strong> ${name}</p>
      <p style="margin-bottom: 10px;"><strong>Email:</strong> ${email}</p>
      <p style="margin-bottom: 10px;"><strong>Teléfono:</strong> ${phone || 'No proporcionado'}</p>
      <p style="margin-bottom: 10px;"><strong>Empresa:</strong> ${company || 'No proporcionada'}</p>
      <p style="margin-bottom: 10px;"><strong>Servicio:</strong> ${service || 'No seleccionado'}</p>
      
      <div style="background-color: #f8f9fa; padding: 15px; border-radius: 8px; margin-top: 20px;">
        <h3 style="margin-top: 0; color: #2563eb;">Mensaje:</h3>
        <p style="margin-bottom: 0;">${message}</p>
      </div>
    </div>
    
    <div style="font-size: 12px; color: #666; border-top: 1px solid #eee; padding-top: 20px;">
      <p>Este mensaje fue enviado desde el formulario de contacto de InsideMind Agency.</p>
    </div>
  </div>
</div>`,
      });

      return NextResponse.json({ success: true, data });
    } catch (emailError: any) {
      console.error('Error al enviar email:', emailError);
      return NextResponse.json(
        { error: 'Error al enviar el email', details: emailError.message },
        { status: 500 }
      );
    }
  } catch (error: any) {
    console.error('Error en el endpoint:', error);
    return NextResponse.json(
      { error: 'Error interno del servidor', details: error.message },
      { status: 500 }
    );
  }
}
