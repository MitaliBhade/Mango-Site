import { LightningElement } from "lwc";
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class App extends LightningElement {
  title = "Orders Mangoes for the season now!!!";
  details;
  details1;
  details2;
  details3;
  disableButton = false;
  ready = false;
 
  
  showFeatures = true;

  loadDetails(event) {
    this.ready = true;
    this.details = "Cost per dozen";
    this.details1 = "Small Size 700rs";
    this.details2 = "Medium Size 800rs";
    this.details3 = "Large Size 900rs";
    this.disableButton = true;
    
     
  }

  showSuccessToast() {
        const evt = new ShowToastEvent({
            title: 'Toast Success',
            message: 'Opearion sucessful',
            variant: 'success',
            mode: 'dismissable'
        });
        this.dispatchEvent(evt);
    }

  /**
   * Getter for the features property
   */
  get features() {
    return [
      {
        label: "Learn in the browser.",
        icon: "utility:edit",
      },
      {
        label: "View changes to code instantly with Live Compilation.",
        icon: "utility:refresh",
      },
      {
        label: "Style your components with SLDS.",
        icon: "utility:brush",
      },
    ];
  }
}
