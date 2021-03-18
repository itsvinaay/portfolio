export default function Contact() {
    return (
        <div className='contact-div container black' id='contact'>
            <h1 className='section-title'>Contact</h1>
            < form className='contact-form' name="contact" method='POST' data-netlify='true'>
                <input type='hidden' name='form-name' value='contact' />
                
                <p>
                    <label htmlFor='name'>Name</label>
                    <input className='contact-field' type='text' id='name' name='name'></input>
                </p>
            
                <p>
                    <label htmlFor='email'>Email</label>
                    <input className='contact-field' type='text' id='email' name='email'></input>
                </p>

                <p>
                    <label  htmlFor='message'>Message</label>
                    <textarea className='contact-field contact-textarea' id='message' name='message'></textarea>
                </p>

                < input className='contact-submit button red' type='submit' value='Send' />
            </form>
        </div>
    )
}