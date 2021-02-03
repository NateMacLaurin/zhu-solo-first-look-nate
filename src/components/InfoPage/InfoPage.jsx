import {useEffect, React} from 'react';
import { useDispatch, useSelector } from 'react-redux';
// This is one of our simplest components
// It doesn't have local state
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is

function InfoPage() {
  
  //redux hooks
  const dispatch = useDispatch();
  const pets = useSelector(store => store.pets);

  //trigger gets pets saga on load
  useEffect(() => {
    dispatch({type: 'FETCH_PETS'});
  }, [])

  return (
    <div className="container">
      <p>Info Page</p>
      <ul>
        {pets.map((pet) => {
            return(
              <li key={pet.id}>{pet.name}</li>
            )
          })
        }
      </ul>
    </div>
  );
}

export default InfoPage;
