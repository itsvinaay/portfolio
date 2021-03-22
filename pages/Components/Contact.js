import { useState } from "react"

export default function Contact() {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [body, setBody] = useState('')
    const [submitted, setSubmitted] = useState(false)

    const submitForm = (e) => {
        e.preventDefault()

        let data = {
            name,
            email,
            body
        }

        fetch('/api/contact', {
          method: 'post',
          headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
        }).then((res) => {
            if (res.status === 200) {
                setSubmitted(true) 
                setName('')
                setEmail('')
                setBody('')
            }
        })
    }

    return (
        <div className='contact-div container black' id='contact'>
            <h1 className='section-title'>Contact</h1>
            <div className='flex-row flex-wrap'>
                <p>
                    <span className='subtitle'>Email: </span> 
                    <span className='big-text'>ejwinch1@gmail.com</span> 
                </p>
                <p>
                    <span className='subtitle'>Phone: </span>
                    <span className='big-text'>210-501-2251</span>
                </p>
                <p>
                    <span className='subtitle'>Located: </span>
                    <span className='big-text'>San Antonio, Texas</span>
                </p>
            </div>
            < form className='contact-form' name="contact" method='POST' data-netlify='true'>
                <input type='hidden' name='form-name' value='contact' />
                
                <p>
                    <label htmlFor='name'>Name</label>
                    <input className='contact-field' onChange={(e)=>{setName(e.target.value)}} type='text' value={name} id='name' name='name'></input>
                </p>
            
                <p>
                    <label htmlFor='email'>Email</label>
                    <input className='contact-field' onChange={(e)=>{setEmail(e.target.value)}} type='text' value={email} id='email' name='email'></input>
                </p>

                <p>
                    <label  htmlFor='message'>Message</label>
                    <textarea className='contact-field contact-textarea' onChange={(e)=>{setBody(e.target.value)}} value={body} id='message' name='message'></textarea>
                </p>

                < input className='contact-submit button red' onClick={(e)=>{submitForm(e)}} type='submit' value='Send' /> { submitted ? <span className='subtitle'> Thanks for the message! </span> : null }
            </form>
        </div>
    )
}