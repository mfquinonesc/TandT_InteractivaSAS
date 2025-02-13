export class MobileHandler {    
    
      isMobile: boolean = window.innerWidth <= 1023;
    
      index: number = 0;
      length:number = 0; 
         
      onResize() {
        this.isMobile = window.innerWidth <= 1023;
      }    
     
      goForward() {
        this.index = (this.index + 1) % this.length;       
      }
    
      goBack() {
        this.index = this.index == 0 ? this.length - 1 : this.index - 1;        
      }
}
