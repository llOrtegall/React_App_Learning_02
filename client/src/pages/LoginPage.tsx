import { Button } from '../components/ui/Button'
import { Input } from '../components/ui/Input'
import { Label } from '../components/ui/Label'

function LoginPage () {
  return (
    <section className="h-screen w-screen bg-gradient-to-t from-blue-600 via-blue-400 to-sky-600 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <figure className='flex justify-center py-2'>
          <img src="/gane.webp" alt="logo gane" loading='lazy' width={120} />
        </figure>
        <form className="mt-4 space-y-4">
          <div className="space-y-2">
            <Label>Correo electronico</Label>
            <Input name='email' type='email' placeholder='example@email.com' />
          </div>
          <div className="space-y-2">
            <Label>Contraseña</Label>
            <Input name='password' type='password' placeholder='********' />
          </div>
          <Button type='button'>Iniciar sesión</Button>
        </form>
      </div>
    </section>
  )
}

export default LoginPage
