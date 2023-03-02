import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonMenuButton, IonButtons } from '@ionic/react';
import './Tab1.css';
import { Wrestler } from '../backend/models/wrestler';
import { useState } from 'react';
import axios from 'axios'

const Tab1: React.FC = () => {

  const initialFormData: Wrestler = {
    firstName: '',
    lastName: '',
    team: '',
  }

  const WrestlerForm = () => {
    const [formData, setFormData] = useState<Wrestler>(initialFormData)

    const handleInputChange = (
      event: React.ChangeEvent<HTMLInputElement>
    ): void => {
      const {name, value} = event.target
      setFormData((prevFormData) => ({...prevFormData, [name]: value}))
    }

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault()
      try {
        await axios.post("http://localhost:8000/wrestlers", formData)
        setFormData(initialFormData)
        alert("Wrestler added successfully")
      } catch (err) {
        console.log(err)
        alert("Error adding wrestler")
      }
    }

    return (
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="firstName">First Name:</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="lastName">Last Name:</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="team">Team:</label>
          <input
            type="text"
            id="team"
            name="team"
            value={formData.team}
            onChange={handleInputChange}
          />
        </div>
        <button type="submit">Add Wrestler</button>
      </form>
    )
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton></IonMenuButton>
          </IonButtons>
          <IonTitle>Brackets</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Brackets</IonTitle>
          </IonToolbar>
        </IonHeader>
        <WrestlerForm />
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
