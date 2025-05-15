
const Mycv = () => {
  return (
        React.createElement('div', {className: 'cv-container'},
        React.createElement('header', null,
        React.createElement('h1', {className: 'cv-container'}, 'Thekra Aljagthmi'),
        React.createElement('p', null, 'Front-end Developer')
),
      React.createElement('section', null,
        React.createElement('h2', null, 'About Me'),
        React.createElement('p', null, 
          'I am a passionate web developer with experience in building user-friendly, ' +
          'responsive websites.'
        )
      ),
      React.createElement('section', null,
        React.createElement('h2', null, 'Skills'),
        React.createElement('ul', null,
          React.createElement('li', null, 'HTML, CSS, JavaScript'),
          React.createElement('li', null, 'React.js'),
          React.createElement('li', null, 'SQL')
        )
      ),
      React.createElement('section', null,
        React.createElement('h2', null, 'Experience'),
        React.createElement('p', null, 
          React.createElement('strong', null, 'Full-Stack Developer at #'),
          React.createElement('br', null),
          'Developed full-stack applications and websites, working closely with clients to meet their needs.'
        )
      ),
      React.createElement('section', null,
        React.createElement('h2', null, 'Education'),
        React.createElement('p', null, 
          React.createElement('strong', null, 'University of Jeddah'),
          ' - Bachelors in CS'
        )
      ),
      React.createElement('section', null,
        React.createElement('h2', null, 'Contact'),
        React.createElement('p', null, 'Email: thekra@gmail.com'),
        React.createElement('p', null, 'LinkedIn: linkedin.com/in/itsthekra')
      )
    )

  ); // return
} // Mycv function 


// let root = document.getElementById('root');
// root.render(React.createElement(Mycv))


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(React.createElement(Mycv)); 