import GitHubIcon from '@material-ui/icons/GitHub';
import { about } from '../../portfolio';
import './About.css';

const About = () => {
  const { name, role, description, resume, social } = about;

  return (
    <div className='about center'>
      {name && (
        <h1>
          Hi, I am <span className='about__name'>{name}.</span>
        </h1>
      )}

      {role && <h2 className='about__role'>A {role}.</h2>}
      
      <div className='about__content'>
        <img src={`${process.env.PUBLIC_URL}/default_img.jpg`} alt="Description" className='about__image'/>
        <p className='about__desc' dangerouslySetInnerHTML={{ __html: description }} />
      </div>

      <div className='about__contact center'>
        {resume && (
          <a href={resume}>
            <span type='button' className='btn btn--outline'>
              Resume
            </span>
          </a>
        )}

        {social && (
          <>
            {social.github && (
              <a
                href={social.github}
                aria-label='github'
                className='link link--icon'
              >
                <GitHubIcon />
              </a>
            )}

            {social.linkedin && (
              <a
                href={social.linkedin}
                aria-label='linkedin'
                className='link link--icon'
              >
                <img src={`${process.env.PUBLIC_URL}/notion.png`} alt="LinkedIn Icon" className='link--icon-img'/>
              </a>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default About;
