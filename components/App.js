var app = React.createElement(App);
ReactDOM.render(app, document.getElementById('app'));

var App = React.createElement({
  render: function() {
    return(
      React.createElement('div', {className: 'app'},
        React.createElement(ContactForm, {contact: contactForm}),
        React.createElement(Contacts, {items: contacts}, {})
        )
      );
  }
}); 