import { CardForm } from '../../components/'
import { Input } from '../../components'

import './style.css'
import { CATEGORIAS } from '../../../enuns'
import { useState } from 'react'

export function RegisterDriverScreen() {

  const [personalData, setPersonData] = useState({ email: '', fullname: '', cpf: '', borndate:'' })

  function handleChange(event) {
    const { name, value } = event.target
    setPersonData({ ...personalData, [name]: value })
  }

  function handleSubmit(){
    //TODO 
  }
  

  return (
    <div className='register-driver-screen-container'>
      <CardForm>
        <form className='form-container'>

          <h1>Dados pessoais</h1>
          <section >

            <div className='inputs-container'>
              <label for='email'>E-mail</label>
              <Input name='email' type='email' placeholder='Ex:: joão.pereira@email.com'
                onChange={handleChange}></Input>
            </div>

            <div className='inputs-container'>
              <label for='fullname'>Nome completo</label>
              <Input name='fullname' placeholder='Ex:: João Pereira'
                onChange={handleChange}></Input>
            </div>

            <div className='inputs-container'>
              <label for='cpf'>CPF</label>
              <Input name='cpf' placeholder='Ex:: 12345678912' autoComplete="off" type='number'
                onChange={handleChange}></Input>
            </div>

            <div className='inputs-container'>
              <label for='borndate'>Data de nascimento</label>
              <Input name='borndate' type='date' onChange={handleChange}></Input>
            </div>
          </section>

          <h1>CNH</h1>
          <section>


            <div className='inputs-container'>
              <label for='numberCNH'>numero</label>
              <Input type='number' placeholder='Ex:: 45815482'></Input>
            </div>

            <div className='inputs-container'>
              <label for='duedate'>data vencimento</label>
              <Input name='duedate' type='date'></Input>
            </div>

            <select className='selectcategories'>

              <option selected disabled>Categoria</option>
              <option value={CATEGORIAS.A}>{CATEGORIAS.A}</option>
              <option value={CATEGORIAS.B}>{CATEGORIAS.B}</option>
              <option value={CATEGORIAS.C}>{CATEGORIAS.C}</option>
              <option value={CATEGORIAS.D}>{CATEGORIAS.D}</option>
              <option value={CATEGORIAS.E}>{CATEGORIAS.E}</option>

            </select>
          </section>

          <div className='button-send-container'>
            <button className='button-send'>REGISTRAR</button>
          </div>

        </form>
      </CardForm>
    </div>
  )
}