(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-pages-ml-ml-module"],{

/***/ "./src/app/pages/ml/connected-ml-studio/connected-ml-studio.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/pages/ml/connected-ml-studio/connected-ml-studio.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"row pl-3 pr-3 mail-container\" style=\"height: 800px\">\r\n    <div class=\"col-md-2 bg-white p-1\" style=\"height: 800px\">\r\n        <div class=\"form-group mb-0 pt-1 pb-1\">\r\n            <div class=\"input-group\">\r\n                <span class=\"input-group-prepend\">\r\n                    <span class=\"input-group-text bg-transparent border-0\"><i class=\"fa fa-search ml-2 mr-1\"></i></span>\r\n                </span>\r\n                <!-- <input class=\"form-control border-0\" type=\"text\"  [(ngModel)]=\"searchText\" placeholder=\"Search mail...\"> -->\r\n                <div class=\"btn-group\">\r\n                    <button type=\"button\" class=\"btn dropdown-toggle no-caret bg-transparent border-0 box-shadow-none\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n                        <i class=\"fa fa-ellipsis-v\"></i>\r\n                    </button>\r\n                    <div class=\"dropdown-menu dropdown-menu-right box-shadow rounded-0\">\r\n                        <a class=\"dropdown-item\" href=\"javascript:void(0);\" (click)=\"type = 'all';getMails();\">All</a>\r\n                        <a class=\"dropdown-item\" href=\"javascript:void(0);\" (click)=\"type = 'starred';getMails();\">Starred</a>\r\n                        <a class=\"dropdown-item\" href=\"javascript:void(0);\" (click)=\"type = 'sent';getMails();\">Sent</a>\r\n                        <a class=\"dropdown-item\" href=\"javascript:void(0);\" (click)=\"type = 'drafts';getMails();\">Drafts</a>\r\n                        <a class=\"dropdown-item\" href=\"javascript:void(0);\" (click)=\"type = 'trash';getMails();\">Trash</a>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"mail-list\" perfectScrollbar style=\"overflow-y: scroll; height:400px; background-color:rgba(212, 223, 224, 0.438)\">          \r\n            <div *ngFor=\"let mail of compoments\" (click)=\"viewDetail(mail)\" class=\"mail-list-item pb-2 pt-2 pl-1 pr-2 transititon\">\r\n                    <div *ngIf=\"mail.separator\">\r\n                        <div style=\"text-align:center; background-color:gainsboro; font-weight: bold\">{{mail.title}}</div>\r\n                    </div>\r\n                   <div *ngIf=\"!mail.separator\">\r\n                    <div class=\"media\">\r\n                        <p></p>\r\n                       <!-- <i class=\"d-flex mr-4 w-70p fa fa-list\"></i> -->\r\n                       <img class=\"d-flex mr-3 w-50p\" src=\"{{mail.imageFlow}}\">\r\n                       <div class=\"media-body overflow-hidden\">\r\n                          <div class=\"d-flex justify-content-between\">\r\n                            <h6 class=\"text-truncate mail-sender\">{{mail.title}}</h6>                  \r\n                          </div>\r\n                       </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <br/>\r\n        <div style=\"height:320px; background-color:rgba(212, 223, 224, 0.438)\">\r\n             Dataflow documentation goes here..\r\n        </div>\r\n      </div>\r\n    <div class=\"col-md-8 bg-white pb-1 mail-view-container\">\r\n        <div class=\"clearfix\">            \r\n                <ul class=\"nav nav-tabs\">\r\n                    <li class=\"nav-item\">\r\n                        <!-- <button class=\"btn btn-secondary rounded-0 mr-1\" (click)=\"compose()\"><i class=\"fa fa-plus\"></i></button> -->\r\n                        <a class=\"nav-link active fa fa-plus\" data-toggle=\"tab\" href=\"#ta\"> Experiment</a>\r\n                    </li>\r\n                    <li class=\"nav-item\">\r\n                        <a class=\"nav-link fa fa-recycle\" data-toggle=\"tab\" href=\"#tb\"> Normalisation</a>\r\n                    </li>\r\n                    <li class=\"nav-item\">\r\n                            <a class=\"nav-link fa fa-list\" data-toggle=\"tab\" href=\"#tb\"> Result</a>\r\n                    </li>\r\n                    <li class=\"nav-item\">\r\n                            <a class=\"nav-link fa fa-bar-chart-o\" data-toggle=\"tab\" href=\"#tb\"> Charts</a>\r\n                    </li>\r\n                    <li class=\"nav-item\">\r\n                        <a class=\"nav-link fa fa-cogs\" data-toggle=\"tab\" href=\"#ta\"> Settings</a>\r\n                    </li>\r\n                    <!-- <li class=\"nav-item dropdown\">\r\n                        <a class=\"nav-link dropdown-toggle\" data-toggle=\"dropdown\" href=\"#\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\">Dropdown</a>\r\n                        <div class=\"dropdown-menu\">\r\n                            <a class=\"dropdown-item\" href=\"#tdropdown1\" data-toggle=\"tab\">Action</a>\r\n                            <a class=\"dropdown-item\" href=\"#tdropdown2\" data-toggle=\"tab\">Another action</a>\r\n                        </div>\r\n                    </li>     -->                      \r\n                </ul>\r\n            </div>\r\n        <!-- <div class=\"d-flex\">\r\n                <div class=\"mail-view-icons pt-2 pb-2\">              \r\n                    <button class=\"btn btn-secondary rounded-0 mr-1\" (click)=\"compose()\"><i class=\"fa fa-plus\"></i></button>\r\n                    <button *ngIf=\"mail && type !='trash'\" class=\"btn btn-secondary rounded-0 mr-1\"><i class=\"fa fa-reply\" aria-hidden=\"true\"></i></button>\r\n                    <button *ngIf=\"newMail\" class=\"btn btn-secondary rounded-0 mr-1\" (click)=\"newMail = false;\"><i class=\"fa fa-arrow-left\"></i></button>\r\n                    <button *ngIf=\"mail && type !='trash'\" class=\"btn btn-secondary rounded-0 mr-1\" (click)=\"changeStarStatus()\"><i class=\"fa\" [ngClass]=\"{'fa-star': mail.starred, 'fa-star-o': !mail.starred}\"></i></button>\r\n                    <button *ngIf=\"mail && type=='trash'\" class=\"btn btn-secondary rounded-0 mr-1\" (click)=\"restore()\"><i class=\"fa fa-undo\"></i></button>\r\n                    <button *ngIf=\"mail\" class=\"btn btn-secondary rounded-0 mr-1\"><i class=\"fa fa-exclamation-circle\"></i></button>\r\n                    <button *ngIf=\"mail && type !='trash'\" class=\"btn btn-secondary rounded-0 mr-1\" (click)=\"delete()\"><i class=\"fa fa-trash\"></i></button>\r\n                    <button class=\"btn btn-secondary rounded-0 mr-1\"><i class=\"fa fa-refresh\"></i></button>\r\n                    <div *ngIf=\"mail\" class=\"btn-group d-inline-block\">\r\n                        <button class=\"btn btn-secondary dropdown-toggle rounded-0\" id=\"dropdownMenuLink\" data-toggle=\"dropdown\" type=\"button\" aria-expanded=\"false\" aria-haspopup=\"true\" >\r\n                                More\r\n                        </button>\r\n                        <div class=\"dropdown-menu dropdown-menu-right box-shadow rounded-0\" aria-labelledby=\"dropdownMenuLink\">\r\n                            <a class=\"dropdown-item\" href=\"javascript:void(0);\" (click)=\"setAsRead()\">Mark as read</a>\r\n                            <a class=\"dropdown-item\" href=\"javascript:void(0);\" (click)=\"setAsUnRead()\">Mark as unread</a>\r\n                            <a class=\"dropdown-item\" href=\"javascript:void(0);\" (click)=\"delete()\">Delete</a>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n        </div> -->\r\n    </div>  \r\n    <div class=\"col-md-2 bg-white\" style=\"border-left-style: solid; border-left-color: rgba(212, 223, 224, 0.438)\">\r\n       <p>Dataflow settings goes here..</p>\r\n      <!--  <button class=\"btn btn-outline-warning w-100p mb-1 mr-1\" type=\"button\">Warning</button>\r\n       <div id=\"example_1\">\r\n       </div> -->\r\n       <br/>\r\n\r\n      \r\n    </div>\r\n</div>\r\n<!--    <div class=\"container\">\r\n    <h1>jQuery flowchart.js Example</h1>\r\n    <div class=\"demo\" id=\"example\" class=\"example\"></div>\r\n    <button class=\"btn btn-primary\" id=\"create_operator\">Create A New Operator</button>\r\n    <button class=\"btn btn-danger\" id=\"delete_selected_button\">Delete Selected Operator</button>\r\n   </div> -->\r\n\r\n"

/***/ }),

/***/ "./src/app/pages/ml/connected-ml-studio/connected-ml-studio.component.scss":
/*!*********************************************************************************!*\
  !*** ./src/app/pages/ml/connected-ml-studio/connected-ml-studio.component.scss ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mail-container .fa-search, .mail-container .fa-ellipsis-v {\n  font-size: 22px;\n  color: #888; }\n\n.mail-container .mail-date {\n  white-space: nowrap;\n  padding-top: 1px;\n  padding-left: 4px; }\n\n.mail-list {\n  position: relative;\n  height: 440px; }\n\n.mail-list .mail-list-item {\n    border-bottom: 1px solid #ccc;\n    cursor: pointer; }\n\n.mail-list .mail-list-item:first-child {\n      border-top: 1px solid #ccc; }\n\n.mail-list .mail-list-item:hover {\n      background-color: #f5f5f5; }\n\n.mail-list .mail-list-item .mail-sender {\n      line-height: 18px; }\n\n.mail-list .mail-list-item .mail-subject {\n      line-height: 22px; }\n\n.mail-list .mail-list-item.selected {\n      background-color: #f5f5f5; }\n\n.mail-list .mail-list-item.unread .mail-sender, .mail-list .mail-list-item.unread .mail-subject {\n      font-weight: bold; }\n\n.mail-view-container {\n  border-left: 3px solid #f5f5f5; }\n\n.mail-view-container .mail-view-icons {\n    border-bottom: 1px solid #ccc;\n    width: 100%; }\n\n.mail-view-container .mail-view-icons .fa-star {\n      color: #FE9700; }\n\n.mail-view {\n  position: relative;\n  height: 440px; }\n\n.mail-view .empty .fa-envelope-o {\n    font-size: 200px;\n    color: #e8e8e8; }\n\n.mail-view .empty p {\n    font-size: 16px; }\n\n@media (max-width: 767px) {\n  .mail-view-container {\n    border-left: none;\n    border-top: 3px solid #f5f5f5; } }\n"

/***/ }),

/***/ "./src/app/pages/ml/connected-ml-studio/connected-ml-studio.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/pages/ml/connected-ml-studio/connected-ml-studio.component.ts ***!
  \*******************************************************************************/
/*! exports provided: ConnectedMLStudioComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConnectedMLStudioComponent", function() { return ConnectedMLStudioComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _connected_ml_studio_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./connected-ml-studio.service */ "./src/app/pages/ml/connected-ml-studio/connected-ml-studio.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ConnectedMLStudioComponent = /** @class */ (function () {
    function ConnectedMLStudioComponent(mailboxService, el) {
        this.mailboxService = mailboxService;
        this.el = el;
        this.type = 'all';
    }
    ConnectedMLStudioComponent.prototype.ngOnInit = function () {
        this.compoments = [
            { id: 0, title: "Data Normalisation", separator: true, imageFlow: "assets/img/app/vs.jpg" },
            { id: 1, title: "Data Loading", separator: false, imageFlow: "assets/img/app/vs.jpg" },
            { id: 2, title: "Data Loading", separator: false, imageFlow: "assets/img/app/vs.jpg" },
            { id: 3, title: "Data Loading", separator: false, imageFlow: "assets/img/app/vs.jpg" },
            { id: 4, title: "Data Transform", separator: false, imageFlow: "assets/img/app/data-server.png" },
            { id: 5, title: "Random Forest", separator: false, imageFlow: "assets/img/app/twoclassvector.png" },
            { id: 6, title: "Data Clustering", separator: true, imageFlow: "assets/img/app/vs.jpg" },
            { id: 7, title: "Data Loading", separator: false, imageFlow: "assets/img/app/vs.jpg" },
            { id: 8, title: "Data Loading", separator: false, imageFlow: "assets/img/app/vs.jpg" },
            { id: 9, title: "Data Loading", separator: false, imageFlow: "assets/img/app/vs.jpg" },
            { id: 10, title: "Data Loading", separator: false, imageFlow: "assets/img/app/vs.jpg" },
            { id: 11, title: "Multiple Classification", separator: true, imageFlow: "assets/img/app/vs.jpg" },
            { id: 12, title: "Merge Data", separator: false, imageFlow: "assets/img/app/merge.png" },
            { id: 13, title: "Data Loading", separator: false, imageFlow: "assets/img/app/vs.jpg" },
            { id: 14, title: "Naive Bayes", separator: false, imageFlow: "assets/img/app/Machine-Learning.png" },
            { id: 15, title: "Data Loading", separator: false, imageFlow: "assets/img/app/data-server.png" },
            { id: 16, title: "Regression", separator: true, imageFlow: "assets/img/app/vs.jpg" },
            { id: 17, title: "Merge Data", separator: false, imageFlow: "assets/img/app/merge.png" },
            { id: 18, title: "Data Loading", separator: false, imageFlow: "assets/img/app/vs.jpg" },
            { id: 19, title: "Data Loading", separator: false, imageFlow: "assets/img/app/vs.jpg" },
            { id: 20, title: "Data Loading", separator: false, imageFlow: "assets/img/app/vs.jpg" },
            { id: 21, title: "Data Loading", separator: false, imageFlow: "assets/img/app/vs.jpg" },
            { id: 22, title: "Data Loading", separator: false, imageFlow: "assets/img/app/vs.jpg" },
        ];
        /*  jQuery('button').click(function(){
         alert('button is clicked with Jquery')
        });*/
    };
    // tslint:disable-next-line:use-life-cycle-interface
    ConnectedMLStudioComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        setTimeout(function () {
            var data = {
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
            jQuery(_this.el.nativeElement).find('.example').flowchart({
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
    };
    ConnectedMLStudioComponent.prototype.getMails = function () {
        switch (this.type) {
            case 'all':
                this.mails = this.mailboxService.getAllMails();
                break;
            case 'starred':
                this.mails = this.mailboxService.getStarredMails();
                break;
            case 'sent':
                this.mails = this.mailboxService.getSentMails();
                break;
            case 'drafts':
                this.mails = this.mailboxService.getDraftMails();
                break;
            case 'trash':
                this.mails = this.mailboxService.getTrashMails();
                break;
            default:
                this.mails = this.mailboxService.getDraftMails();
        }
    };
    ConnectedMLStudioComponent.prototype.viewDetail = function (mail) {
        this.mail = this.mailboxService.getMail(mail.id);
        this.mails.forEach(function (m) { return m.selected = false; });
        this.mail.selected = true;
        this.mail.unread = false;
        this.newMail = false;
    };
    ConnectedMLStudioComponent.prototype.compose = function () {
        this.mail = null;
        this.newMail = true;
    };
    ConnectedMLStudioComponent.prototype.setAsRead = function () {
        this.mail.unread = false;
    };
    ConnectedMLStudioComponent.prototype.setAsUnRead = function () {
        this.mail.unread = true;
    };
    ConnectedMLStudioComponent.prototype.delete = function () {
        this.mail.trash = true;
        this.mail.sent = false;
        this.mail.draft = false;
        this.mail.starred = false;
        this.getMails();
        this.mail = null;
    };
    ConnectedMLStudioComponent.prototype.changeStarStatus = function () {
        this.mail.starred = !this.mail.starred;
        this.getMails();
    };
    ConnectedMLStudioComponent.prototype.restore = function () {
        this.mail.trash = false;
        this.type = 'all';
        this.getMails();
        this.mail = null;
    };
    ConnectedMLStudioComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-connected-ml-studio',
            template: __webpack_require__(/*! ./connected-ml-studio.component.html */ "./src/app/pages/ml/connected-ml-studio/connected-ml-studio.component.html"),
            styles: [__webpack_require__(/*! ./connected-ml-studio.component.scss */ "./src/app/pages/ml/connected-ml-studio/connected-ml-studio.component.scss")],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            providers: [_connected_ml_studio_service__WEBPACK_IMPORTED_MODULE_1__["ConnectedMLService"]]
        }),
        __metadata("design:paramtypes", [_connected_ml_studio_service__WEBPACK_IMPORTED_MODULE_1__["ConnectedMLService"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], ConnectedMLStudioComponent);
    return ConnectedMLStudioComponent;
}());



/***/ }),

/***/ "./src/app/pages/ml/connected-ml-studio/connected-ml-studio.service.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/pages/ml/connected-ml-studio/connected-ml-studio.service.ts ***!
  \*****************************************************************************/
/*! exports provided: DataComponent, ConnectedMLService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataComponent", function() { return DataComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConnectedMLService", function() { return ConnectedMLService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var DataComponent = /** @class */ (function () {
    function DataComponent(id, sender, senderPhoto, senderMail, subject, date, body, attachment, attachments, unread, sent, starred, draft, trash, selected) {
        this.id = id;
        this.sender = sender;
        this.senderPhoto = senderPhoto;
        this.senderMail = senderMail;
        this.subject = subject;
        this.date = date;
        this.body = body;
        this.attachment = attachment;
        this.attachments = attachments;
        this.unread = unread;
        this.sent = sent;
        this.starred = starred;
        this.draft = draft;
        this.trash = trash;
        this.selected = selected;
    }
    return DataComponent;
}());

var DataComponents = [
    new DataComponent(1, 'Envato Market', 'assets/img/app/envato.jpg', 'do-not-reply@market.envato.com', 'Your updated item has been approved', '4:08 PM', '<p>Congratulations! Your update to Azimuth - Angular 2 Admin Template on ThemeForest has been approved. ' +
        'You can view your item here: </p>' +
        '<p><a href="http://themeforest.net/item/azimuth-angular-2-admin-template/19182105" target="blank">http://themeforest.net/item/azimuth-angular-2-admin-template/19182105</a></p>' +
        '<p>Thanks for your submission!</p>' +
        '<p>Regards,<br> Envato Market Team</p>', false, [], true, false, false, false, false, false),
    new DataComponent(2, 'Josiah Fromdahl', 'assets/img/profile/bruno.jpg', 'Reekie8647@gmail.com', 'Useful tool for those who are involved in SEO', '9:47 AM', '<p>Hi, I want to introduce the Website Reviewer is an incredibly useful tool for those who are involved in SEO and web designing. ' +
        'This particular tool will provide you with quick website review and SEO audit of the websites you’ve created so ' +
        'you will be able to determine if and where any changes should be made so you can make it as effective ' +
        'as possible when it comes to getting visitors and keeping them interested. ' +
        'Unlike many similar tools, website reviewer is completely free.</p>', true, ['assets/img/app/snow.jpg', 'assets/img/app/sample.jpg'], true, false, true, false, false, false),
    new DataComponent(3, 'Google Cloud Platform', 'assets/img/app/google-platform.png', 'CloudPlatform-noreply@google.com', 'Lessons from the field: surviving success with Customer Reliability Engineering', 'Jan 5', '<h4>TRENDING</h4>' +
        '<p>For those who missed the early adoption of Infrastructure as a Service circa 2007,' +
        'this in-depth history stresses why businesses need to begin building around "serverless" architectures.</p>' +
        '<p>A stress test led by Pivotal’s Cloud Foundry team ran 250,000 real-life app containers on Google Compute Engine. ' +
        'GCP made it possible to stand the environment up in hours, and scaled it without pre-planning.</p>' +
        '<p>Dig in to a new site packed with open-source tools and resources that aims to make it easy for anyone to explore, develop, and share AI creations. ' +
        'Play an AI duet, or have your phone guess what you’re drawing.</p>', false, [], false, false, false, false, false, false),
    new DataComponent(4, 'Microsoft Visual Studio', 'assets/img/app/vs.jpg', 'MVS@e-mail.microsoft.com', 'Welcome to Visual Studio Team Services', '24.12.2016', '<p>Whether your teams develop in Java, .NET, or in multiple languages, Visual Studio Team Services offers an open,' +
        'cloud-hosted development hub. Use your favorite IDE, develop in any language, and empower your teams to iterate ' +
        'rapidly.</p> <p>Rogue security software scams. Rogue security software, also known as "scareware," is software that ' +
        'appears to be beneficial from a security perspective but provides limited or no security, generates erroneous or ' +
        'misleading alerts, or attempts to lure you into participating in fraudulent transactions. These scams can appear ' +
        'in email, online advertisements, your social networking site, search engine results, or even in pop-up windows on ' +
        'your computer that might appear to be part of your operating system, but are not.</p>', false, [], true, false, false, false, false, false),
    new DataComponent(5, 'Draft', '', '', 'no subject', '4:46 PM', '', false, [], false, false, false, true, false, false),
    new DataComponent(6, 'Draft', '', '', 'Please confirm your email', 'Jan 7', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elementum interdum ex, sed aliquet nisl maximus imperdiet. Phasellus pharetra nunc eu dui hendrerit, quis ullamcorper tortor malesuada. Nullam ante mi, auctor eu nunc vitae, gravida molestie arcu.', false, [], false, false, false, true, false, false),
    new DataComponent(7, 'MailChimp', 'assets/img/app/mailchimp.jpg', 'hello@mailchimp.com', 'Our 2016 annual report', '22.12.2016', '<p>For our 2016 annual report, we let our design team run wild with our most fun facts and proudest moments from the year. From GIFs in email campaigns to physical tons of infrastructure added to dollars raised for charity, it’s our year in numbers.</p>' +
        '<p>We’re proud of our new features, our customer support tickets solved, and our philanthropy in Atlanta. But we’re even more proud of you and the billions of emails you’ve sent to grow your businesses your way in 2016. Keep up the good work!</p>' +
        '<p>Cheers to the new year,</p>' +
        '<p>MailChimp</p>', false, [], false, false, false, false, false, false),
    new DataComponent(8, 'Bluehost', 'assets/img/app/bluehost.jpg', 'no-reply@e.bluehost.com', 'Your domain privacy may be at risk', '20.12.2016', '<h4>New ICANN Rules Require Accurate Contact Information</h4>' +
        '<p>Your domain information may be at risk. However, you can protect your information with domain privacy.</p>' +
        '<p>Protect yourself with Domain Privacy.</p>' +
        '<p><small>Only $11.88 per year.**</small></p>' +
        '<p><a href="http://bluehost.com/" target="blank" class="btn btn-success">Get started</a></p>', false, [], false, false, true, false, false, false),
    new DataComponent(9, 'Vimeo', 'assets/img/users/default-user.jpg', 'vimeo@email.vimeo.com', 'The year\'s best videos and milestones', '20.12.2016', '<h4>Now presenting: 2016\'s best videos</h4>' +
        '<p>Every day, the world\'s best creators upload their videos to Vimeo. And now, the most inventive, most striking, most all-around mind-blowing videos of 2016 are in. Enjoy, wondrous humans.</p>' +
        '<p><a href="https://vimeo.com/blog/post/The-Top-Videos-of-2016?utm_source=email&utm_medium=vimeo-decembernewsletter-201612&utm_campaign=30389" target="blank" class="btn btn-info">See the list</a></p>', false, [], false, false, false, false, false, false),
    new DataComponent(10, 'Andy Dufresne', 'assets/img/profile/adam.jpg', 'andy.dufresne@gmail.com', 'The Shawshank Redemption', '18.11.2016', '<p>From Wikipedia, the free encyclopedia</p>' +
        '<p>The Shawshank Redemption is a 1994 American drama film written and directed by Frank Darabont. and starring Tim Robbins and Morgan Freeman. Adapted from the Stephen King novella Rita Hayworth and Shawshank Redemption, the film tells the story of Andy Dufresne, ' +
        'a banker who is sentenced to life in Shawshank State Penitentiary for the murder of his wife and her lover, despite his claims of innocence. During his time at the prison, he befriends a fellow inmate, Ellis Boyd "Red" Redding, ' +
        'and finds himself protected by the guards after the warden begins using him in his money-laundering operation.</p>', false, [], false, true, false, false, false, false),
    new DataComponent(11, 'The Envato Team', 'assets/img/app/envato.jpg', 'donotreply@envato.com', 'Author Driven Pricing on ThemeForest, CodeCanyon and 3DOcean', '05.09.2016', '<h5>Hey Envato Community Members!</h5>' +
        '<p>As many of you know, over the past 12 months we have been rolling out Author Driven Pricing (ADP) across a range of different categories on Envato Market. So far this has included GraphicRiver and a handful of categories within ThemeForest.</p>' +
        '<p>In a few weeks, we\'ll be moving on to the next stage of our Author Driven Pricing project. This will involve introducing ADP to three new areas of Envato Market. These areas are:</p>' +
        '<ul><li>All remaining ThemeForest categories (including WordPress). </li><li>All categories on CodeCanyon.</li><li>All categories on 3DOcean</li></ul>' +
        '<p>We strongly recommend reading the full announcement on our forums where you will find:</p>' +
        '<ul><li>More details about the change.</li><li>How ADP has impacted pricing on previous categories.</li><li>Technical details regarding how to set prices.</li> <li>Why we’ve made the change. </li></ul>' +
        '<p>You will also be able to ask any questions you might have.</p>' +
        '<p>We will send you another email to let you know when this feature goes live.</p>' +
        '<p>All the best,</p>' +
        '<p>The Envato Team</p>', false, [], false, false, false, false, false, false),
    new DataComponent(12, 'Jonathan Cantu', 'assets/img/avatars/avatar-3.png', 'JCantu@billingsleyco.com', 'Ability to Customize', '02.09.2016', '<p>Hi,</p><p>Upon purchases, will I have the ability to modify color palette, font, etc. beyond your own design?</p><p>Thanks</p>', false, [], false, false, false, false, false, false),
    new DataComponent(13, 'Jennifer Adam', 'assets/img/profile/julia.jpg', 'jenniferadam2009@gmail.com', 'Guest Post Request - 2016 !!!', '09.05.2016', '<p><b>Hello,</b></p>' +
        '<p>I\'m Jennifer, constant follower of your blog posts and I\'ve liked most of the blog posts written here. I could realize you\'ve already published some great guest posts from different authors with distinct styles ' +
        'and I\'d be privileged if I were provided with an opportunity to delight your blog followers with some informative blog posts.</p>' +
        '<p>I\'m a content expert and I\'ve contributed some sensible and informative articles to surplus niche-specific blogs. I realize the value of content and its part in helping out numerous people out there in the space. </p>', false, [], false, false, false, false, false, false)
];
var ConnectedMLService = /** @class */ (function () {
    function ConnectedMLService() {
    }
    ConnectedMLService.prototype.getAllMails = function () {
        return DataComponents.filter(function (mail) { return mail.sent == false && mail.draft == false && mail.trash == false; });
    };
    ConnectedMLService.prototype.getStarredMails = function () {
        return DataComponents.filter(function (mail) { return mail.starred == true; });
    };
    ConnectedMLService.prototype.getSentMails = function () {
        return DataComponents.filter(function (mail) { return mail.sent == true; });
    };
    ConnectedMLService.prototype.getDraftMails = function () {
        return DataComponents.filter(function (mail) { return mail.draft == true; });
    };
    ConnectedMLService.prototype.getTrashMails = function () {
        return DataComponents.filter(function (mail) { return mail.trash == true; });
    };
    ConnectedMLService.prototype.getMail = function (id) {
        return DataComponents.find(function (mail) { return mail.id === +id; });
    };
    ConnectedMLService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], ConnectedMLService);
    return ConnectedMLService;
}());



/***/ }),

/***/ "./src/app/pages/ml/ml.module.ts":
/*!***************************************!*\
  !*** ./src/app/pages/ml/ml.module.ts ***!
  \***************************************/
/*! exports provided: routes, MlModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MlModule", function() { return MlModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _theme_directives_directives_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../theme/directives/directives.module */ "./src/app/theme/directives/directives.module.ts");
/* harmony import */ var _connected_ml_studio_connected_ml_studio_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./connected-ml-studio/connected-ml-studio.component */ "./src/app/pages/ml/connected-ml-studio/connected-ml-studio.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    { path: '', redirectTo: 'connected-ml-studio', pathMatch: 'full' },
    { path: 'connected-ml-studio', component: _connected_ml_studio_connected_ml_studio_component__WEBPACK_IMPORTED_MODULE_4__["ConnectedMLStudioComponent"], data: { breadcrumb: 'Connected ML Studio' } },
];
var MlModule = /** @class */ (function () {
    function MlModule() {
    }
    MlModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _theme_directives_directives_module__WEBPACK_IMPORTED_MODULE_3__["DirectivesModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)
            ],
            declarations: [
                _connected_ml_studio_connected_ml_studio_component__WEBPACK_IMPORTED_MODULE_4__["ConnectedMLStudioComponent"]
            ]
        })
    ], MlModule);
    return MlModule;
}());



/***/ })

}]);
//# sourceMappingURL=app-pages-ml-ml-module.js.map