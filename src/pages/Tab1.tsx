import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonMenuButton, IonButtons, IonButton } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab1.css';

const Tab1: React.FC = () => {
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
        <div>
          Wrestler 1
          <form>
            <label>
              First Name
              <input type="text" name="firstName" />
            </label>
            <br />
            <label>
              Last Name
              <input type="text" name="lastName" />
            </label>
            <br />
            <label>
              Team
              <input type="text" name="team" />
            </label>
            <input type='submit' value='Submit' />
          </form>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
