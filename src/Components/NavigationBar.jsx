import React from 'react';
import logo from '../images/logo.png';
import ReminderMelogo from '../images/reminder_me.png';

function App() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [activePage, setActivePage] = React.useState('Home'); // For demo purposes

  return (
    <div className="bg-[#DDF3DE] text-black font-poppins">
      <div className="container mx-auto px-6 py-3 flex items-center justify-between pt-12 pl-16">
        <div className="flex items-center">
          <img src={logo} alt="logo" className="h-10 w-10 mr-3 rounded-full" />
          <img src={ReminderMelogo} alt="logo" />
        </div>
        <div className="hidden md:flex space-x-3">
          {['Home', 'About', 'Contact'].map(page => (
            <a 
              key={page}
              href="#" 
              className={`px-3 py-2 text-lg font-medium ${page === activePage ? 'text-[#2F8331] border-b-2 border-[#2F8331]' : 'text-black'}`}
              onClick={() => setActivePage(page)}
            >
              {page}
            </a>
          ))}
        </div>

        <div className="flex space-x-4">
          <button 
            className="border border-[#9F9F9F] rounded-md bg-transparent text-black font-semibold text-sm px-6 py-2"
          >
            Sign Up
          </button>
          <button 
            className="rounded-md text-white font-semibold text-sm px-6 py-2 bg-gradient-to-r from-[#3DA93f] to-[#2F8331]"
          >
            Login
          </button>
        </div>

        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            Menu
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          {['Home', 'About', 'Contact'].map(page => (
            <a 
              key={page}
              href="#" 
              className={`block px-3 py-2 text-lg font-medium ${page === activePage ? 'text-[#2F8331] border-b-2 border-[#2F8331]' : 'text-black'}`}
              onClick={() => setActivePage(page)}
            >
              {page}
            </a>
          ))}
          <button 
            className="block px-4 py-2 mt-3 border border-[#9F9F9F] rounded-md bg-transparent text-black font-semibold text-sm"
          >
            Sign Up
          </button>
          <button 
            className="block px-4 py-2 mt-3 rounded-md text-white font-semibold text-sm bg-gradient-to-r from-[#3DA93f] to-[#2F8331]"
          >
            Login
          </button>
        </div>
      )}
    </div>
  );
}

export default App;
