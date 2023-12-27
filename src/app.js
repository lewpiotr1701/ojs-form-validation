import { submitForm } from "./helpers/submit"
import { validateInput } from "./helpers/validation"

const submitButton = document.querySelector('#submit')

submitButton.addEventListener('click', () => {
  const isValid = validateInput(
    {
      name: 'name',
      email: 'email',
      password: 'password',
      confirm: 'confirm',
      rodo: 'rodo'
    }
  )

  if (!isValid) return

  submitForm()
})

