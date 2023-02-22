import {CiSearch} from 'react-icons/ci';
import {MdClose} from 'react-icons/md';
import { Link } from 'react-router-dom';
import {BsPlusLg} from 'react-icons/bs';

import NoteItem from '../components/NoteItem';
import { useEffect, useState } from 'react';

const Notes = ({notes}) => {

  const [showSearch, setShowSearch] = useState(false);
  const [text, setText] = useState('');
  const [filterNotes, setFilterNotes] = useState(notes);

  const handleSearch = () => {
    setFilterNotes(notes.filter(note => {
      if(note.title.toLowerCase().match(text.toLocaleLowerCase())) {
        return note;
      }
    }))
  }

  useEffect(handleSearch, [text])

  return (
    <section>
        <header className="notes__header">
            {!showSearch && <h2>Mis notas</h2>}
            {showSearch && <input type="text" value={text} onChange={(e) => {setText(e.target.value); handleSearch();}} autoFocus placeholder='Buscar nota'/>}
            <button className='btn' onClick={() => setShowSearch(prevState => !prevState)} >{showSearch ? <MdClose/> : <CiSearch/>}</button>
        </header>
        <div className="notes__container">
          {
            filterNotes.length == 0 && <p className='empty__notes'>No se encontraron notas.</p>
          }

          {
              filterNotes.map(note => <NoteItem key={note.id} note={note} />)
          }
        </div>
        <Link to="/create-note" className="btn add__btn"><BsPlusLg/></Link>
    </section>
  )
}

export default Notes;