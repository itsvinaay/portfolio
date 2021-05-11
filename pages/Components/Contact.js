import { useState } from "react"

export default function Contact() {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [body, setBody] = useState('')
    const [submitted, setSubmitted] = useState(false)
    const [submittedMsg, setSubmittedMsg] = useState('Please fill out all forms of the field')

    const submitForm = (e) => {
        e.preventDefault()
        console.log('Sending')

        if (name && email && body) {
            let data = {
                name,
                email,
                body
            }
    
            fetch('/api/contact', {
              method: 'POST',
              headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
              },
              body: JSON.stringify(data)
            }).then((res) => {
                console.log('Response received')
                if (res.status === 200) {
                    console.log('Response succeeded!')
                    setName('')
                    setEmail('')
                    setBody('')
                    setSubmittedMsg('Thanks for the message!')
                }
            })
        }

        setSubmitted(true) 
    }

    return (
        <div className='contact-div container black' id='contact'>
            <h1 className='section-title'>Contact</h1>
            <div className='flex-row flex-wrap'>
                <p>
                    <span className='subtitle'>Email: </span> 
                    <span className='big-text'>elyssajwinch@gmail.com</span> 
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

                <p className='flex-row contact-submit-field'>
                    < input className='contact-submit light button red' onClick={(e)=>{submitForm(e)}} type='submit' value='Send' /> { submitted ? <span className='subtitle'> {submittedMsg} </span> : null }
                </p>
            </form>
        </div>
    )
}