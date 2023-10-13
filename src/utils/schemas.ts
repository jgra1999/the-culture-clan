import * as z from 'zod'

export const simpleLoginSchema = z.object({
	email: z
		.string()
		.min(1, { message: 'El email es requerido' })
		.email({ message: 'Ingresa un correo electrónico serio (ponte@serio.com)' }),
	password: z
		.string()
		.min(6, { message: 'La contraseña debe contener al menos 6 caracteres' })
})

export const SignUpSchema = z.object({
	name: z.string().min(2, { message: 'El nombre es requerido' }),
	last_name: z.string().min(2, { message: 'El apellido es requerido' }),
	country: z.string().min(2, { message: 'El país es requerido' }),
	city: z.string().min(2, { message: 'La ciudad es requerida' }),
	email: z
		.string()
		.min(1, { message: 'El email es requerido' })
		.email({ message: 'Ingresa un correo electrónico serio (ponte@serio.com)' }),
	password: z
		.string()
		.min(6, { message: 'La contraseña debe contener al menos 6 caracteres' })
})

export const ProductsSchema = z.object({
	image_url_1: z
		.string()
		.min(2, { message: 'La url de la imagen es requerida' })
		.url({ message: 'Ingresa una url válida' }),
	image_url_2: z
		.string()
		.min(2, { message: 'La url de la imagen es requerida' })
		.url({ message: 'Ingresa una url válida' }),
	name: z.string().min(2, { message: 'El nombre es requerido' }),
	// slug: z.string(),
	collection: z.string().min(2, { message: 'La colección es requerido' }),
	price: z.string().min(1, { message: 'El precio es requerido' }),
	description: z.string().min(2, { message: 'la descripción es requerido' })
})
