import { Component, OnInit, ViewEncapsulation, ElementRef  } from '@angular/core';
import { ConnectedMLService, DataComponent } from './connected-ml-studio.service';
import { ComponentFlow } from './comonent-flow';

declare var jQuery: any;

@Component({
  selector: 'app-connected-ml-studio',
  templateUrl: './connected-ml-studio.component.html',
  styleUrls: ['./connected-ml-studio.component.scss'],
  encapsulation: ViewEncapsulation.None,
  providers:[ ConnectedMLService ]
})
export class ConnectedMLStudioComponent implements OnInit {

  public mails: Array<DataComponent>;
  public mail: DataComponent;
  public newMail: boolean;
  public type:string = 'all';
  public searchText: string;
  public compoments: ComponentFlow[];

  constructor(private mailboxService: ConnectedMLService, private el: ElementRef) { }

  ngOnInit() {
   
    this.compoments = [
      { id: 0, title: "Data Normalisation", separator: true, imageFlow: "assets/img/app/vs.jpg"},
      { id: 1, title: "Data Loading", separator: false, imageFlow: "assets/img/app/vs.jpg"},
      { id: 2, title: "Data Loading", separator: false, imageFlow: "assets/img/app/vs.jpg"},
      { id: 3, title: "Data Loading", separator: false, imageFlow: "assets/img/app/vs.jpg"},
      { id: 4, title: "Data Transform", separator: false, imageFlow: "assets/img/app/data-server.png"},
      { id: 5, title: "Random Forest", separator: false, imageFlow: "assets/img/app/twoclassvector.png"}, 
      { id: 6, title: "Data Clustering", separator: true, imageFlow: "assets/img/app/vs.jpg"},
      { id: 7, title: "Data Loading", separator: false, imageFlow: "assets/img/app/vs.jpg"},
      { id: 8, title: "Data Loading", separator: false, imageFlow: "assets/img/app/vs.jpg"},
      { id: 9, title: "Data Loading", separator: false, imageFlow: "assets/img/app/vs.jpg"},
      { id: 10, title: "Data Loading", separator: false, imageFlow: "assets/img/app/vs.jpg"},
      { id: 11, title: "Multiple Classification", separator: true, imageFlow: "assets/img/app/vs.jpg"},
      { id: 12, title: "Merge Data", separator: false, imageFlow: "assets/img/app/merge.png"},
      { id: 13, title: "Data Loading", separator: false, imageFlow: "assets/img/app/vs.jpg"},
      { id: 14, title: "Naive Bayes", separator: false, imageFlow: "assets/img/app/Machine-Learning.png"},
      { id: 15, title: "Data Loading", separator: false, imageFlow: "assets/img/app/data-server.png"},
      { id: 16, title: "Regression", separator: true, imageFlow: "assets/img/app/vs.jpg"},
      { id: 17, title: "Merge Data", separator: false, imageFlow: "assets/img/app/merge.png"},
      { id: 18, title: "Data Loading", separator: false, imageFlow: "assets/img/app/vs.jpg"},
      { id: 19, title: "Data Loading", separator: false, imageFlow: "assets/img/app/vs.jpg"},
      { id: 20, title: "Data Loading", separator: false, imageFlow: "assets/img/app/vs.jpg"},
      { id: 21, title: "Data Loading", separator: false, imageFlow: "assets/img/app/vs.jpg"},
      { id: 22, title: "Data Loading", separator: false, imageFlow: "assets/img/app/vs.jpg"},
   ];
     /*  jQuery('button').click(function(){
      alert('button is clicked with Jquery') 
     });*/
  }
  
  // tslint:disable-next-line:use-life-cycle-interface
  ngAfterViewInit() {

    setTimeout(() => {
    const data = {
      operators: {
        operator1: {
          top: 20,
          left: 20,
          properties: {
            title: 'Operator 1',
            inputs: {},
            outputs: {
              output_1: {
                label: 'Output 1',
              }
            }
          }
        },
        operator2: {
          top: 80,
          left: 300,
          properties: {
            title: 'Operator 2',
            inputs: {
              input_1: {
                label: 'Input 1',
              },
              input_2: {
                label: 'Input 2',
              },
            },
            outputs: {}
          }
        },
      }
    };

    jQuery(this.el.nativeElement).find('.example').flowchart({
      data: data
    });

    // Apply the plugin on a standard, empty div...
    // $('#example').flowchart({
    //   data: data
    // });
/* 
    let operatorI = 0;
    jQuery('#create_operator').click(() => {
      const operatorId = 'created_operator_' + operatorI;
      const operatorData = {
        top: 60,
        left: 500,
        properties: {
          title: 'Operator ' + (operatorI + 3),
          inputs: {
            input_1: {
              label: 'Input 1',
            }
          },
          outputs: {
            output_1: {
              label: 'Output 1',
            }
          }
        }
      };

      operatorI++;

      jQuery(this.el.nativeElement).find('.example').flowchart('createOperator', operatorId, operatorData);
    });

    jQuery('#delete_selected_button').click(() => {
      jQuery(this.el.nativeElement).find('.example').flowchart('deleteSelected');
    });
*/
  }, 2000); 
  }


 public getMails(){
      switch (this.type) {
          case 'all': 
              this.mails = this.mailboxService.getAllMails();
              break;
          case 'starred':
              this.mails =  this.mailboxService.getStarredMails();
              break;
          case 'sent':
              this.mails =  this.mailboxService.getSentMails();
              break;
          case 'drafts':
              this.mails =  this.mailboxService.getDraftMails();
              break;
          case 'trash':
              this.mails =  this.mailboxService.getTrashMails();
              break;
          default:
              this.mails =  this.mailboxService.getDraftMails();
      }  
  }

  public viewDetail(mail){
      this.mail = this.mailboxService.getMail(mail.id);    
      this.mails.forEach(m => m.selected = false);
      this.mail.selected = true;
      this.mail.unread = false;
      this.newMail = false;
  }

  public compose(){
      this.mail = null;
      this.newMail = true;
  }

  public setAsRead(){
      this.mail.unread = false;
  }

  public setAsUnRead(){
      this.mail.unread = true;
  }

  public delete() {
      this.mail.trash = true;
      this.mail.sent = false;
      this.mail.draft = false; 
      this.mail.starred = false; 
      this.getMails(); 
      this.mail = null;
  }

  public changeStarStatus() {       
      this.mail.starred = !this.mail.starred;
      this.getMails(); 
  }

  public restore(){
      this.mail.trash = false;
      this.type = 'all';
      this.getMails();
      this.mail = null; 
  }
}