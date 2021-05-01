import Image from 'next/image'
import ResumeBlock from './ResumeBlock'
import LogoBig from './LogoBig'

export default function Resume() {
    return (
        <div className='container yellow' id='resume'>
            <div>
            <div className='flex flex-wrap'>
                <h1 className='section-title'>Resume</h1>
                <a className='button resume-button dark red' href='/elyssa-winch-resume.pdf' download>Click to download</a>
            </div>
                    
            <div className='resume-body flex'>
                
                <div className='resume-body-column edu-column'>
                    <h3 className='subtitle resume-subtitle'>Education</h3>
                    < ResumeBlock 
                      key='edu-0'
                      title='Software Engineering Immersive'
                      subtitle='General Assembly'
                      titleDate='Dec 2020.....March 2021'
                      className='resume-edu-list'
                      items={[
                          'Full-stack software engineering immersive student in an intensive, twelve-week, 450+ hour program focused on product development fundamentals, object-oriented programming, MVC frameworks, data modeling, and team collaboration strategies. Developed a portfolio of individual and group projects'
                      ]}
                    />
                    
                    < ResumeBlock 
                        key='edu-1'
                        title='Bachelors of the Arts in English'
                        subtitle='University of Houston'
                        titleDate='Aug 2013.....May 2018'
                        className='resume-edu-list'
                        items={[
                            'Four-year program developing communication and analysis skills, working as an assitant editor, developed skills with publication, organization, copy-editing, line-editing, collaboration and teamwork.'
                        ]}
                    />
                </div>
                <div className='resume-body-column employment-column'>
                    <h3 className='subtitle resume-subtitle'>Employment</h3>
                    < ResumeBlock 
                        key='job-0'
                        title='Robotic Process Automation Developer'
                        titleDate='Jan 2020.....Oct 2020'
                        subtitle='Delta General Insurance Agency'
                        className='resume-employment-list'
                        items={[
                            'Developed RPA workflows that automated 300+ tasks per month',
                            'Updated and maintained company SQL database',
                            'Researched new technologies and techniques to add to the company tech stack, improving workflow',
                            'Drafted user documentation for 80+ coworkers to easily access new technologies'
                        ]}
                    />
                    < ResumeBlock 
                        key='job-1'
                        title='Customer Service Representative'
                        titleDate='Aug 2018.....Oct 2019'
                        subtitle='Tobin Center for the Performing Arts'
                        className='resume-employment-list'
                        items={[
                            'Provided award-winning customer service',
                            'Managed and organized fellow CSRs',
                            'Performed data entry and aided database management',
                            'Developed skill with new software and technology, such as Audience View'

                        ]}
                    />
                </div>
            </div>
            <div >
                    <h3 className='subtitle resume-subtitle'>Skills</h3>
                    <div className='flex-row skill-section'>
                    < LogoBig 
                        src='/images/javascript.png'
                        alt='Javascript'
                    />
                    < LogoBig  
                        src='/images/css.png'
                        alt='CSS'
                    />
                    < LogoBig 
                        src='/images/uipath.png'
                        alt='UiPath'
                    />
                    < LogoBig 
                        src='/images/react.png'
                        alt='React'
                    />
                    < LogoBig  
                        src='/images/vue.png'
                        alt='Vue'
                    />
                    < LogoBig  
                        src='/images/bootstrap.png'
                        alt='Bootstrap'
                    />
                    < LogoBig  
                        src='/images/graphql.png'
                        alt='GraphQL'
                    />
                    < LogoBig 
                        src='/images/node.png'
                        alt='Node'
                    />
                    < LogoBig 
                        src='/images/mongodb.png'
                        alt='MongoDB'
                    />
                    <span className='logo-big'>
                        <Image
                            src='/images/sql.png'
                            height={95} 
                            width={190} 
                            alt='SQL'
                        />
                        <div>SQL</div>
                    </span>
                    < LogoBig 
                        src='/images/python.png'
                        alt='Python'
                    />
                    < LogoBig  
                        src='/images/photoshop.png'
                        alt='Photoshop'
                    />
                    < LogoBig  
                        src='/images/illustrator.png'
                        alt='Illustrator'
                    />
                </div>
            </div>
        </div>
    </div>
    )
}