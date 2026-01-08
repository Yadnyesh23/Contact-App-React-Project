import AddContact from "./components/AddContact"
import ContactList from "./components/ContactList"
import Header from "./components/Header"

function App() {

  const contacts = [
    {
      id:1,
      name:"Yadnyesh",
      email:"yadnyesh@gmsil.com",
      number:"+91-9867637173"
    },
    {
      id:2,
      name:"Stavan",
      email:"stavan@gmsil.com",
      number:"+91-9029560731"
    },
  ]
    
  return (
    <>
     <Header />
     <AddContact />
     <ContactList contacts={contacts} />
    </>
  )
}

export default App
