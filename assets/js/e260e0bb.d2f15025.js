"use strict";(self.webpackChunkopenfga_dev=self.webpackChunkopenfga_dev||[]).push([[7226],{87029:function(e,t,a){a.r(t),a.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return c},metadata:function(){return d},toc:function(){return h}});var n=a(87462),o=a(63366),i=(a(67294),a(3905)),r=a(6737),s=["components"],c={sidebar_position:8,slug:"/modeling/contextual-time-based-authorization"},l="Contextual and Time-Based Authorization",d={unversionedId:"content/modeling/contextual-time-based-authorization",id:"content/modeling/contextual-time-based-authorization",title:"Contextual and Time-Based Authorization",description:"This section explores some methods available to you to tackle some use-cases where the expected authorization check may depend on certain dynamic or contextual data (such as time, location, ip address, weather) that have not been written to the  store.",source:"@site/docs/content/modeling/contextual-time-based-authorization.mdx",sourceDirName:"content/modeling",slug:"/modeling/contextual-time-based-authorization",permalink:"/docs/modeling/contextual-time-based-authorization",draft:!1,editUrl:"https://github.com/openfga/openfga.dev/edit/main/docs/content/modeling/contextual-time-based-authorization.mdx",tags:[],version:"current",sidebarPosition:8,frontMatter:{sidebar_position:8,slug:"/modeling/contextual-time-based-authorization"},sidebar:"docs",previous:{title:"Custom Roles",permalink:"/docs/modeling/custom-roles"},next:{title:"Authorization Through Organization Context",permalink:"/docs/modeling/organization-context-authorization"}},u={},h=[{value:"Before you start",id:"before-you-start",level:2},{value:"Scenario",id:"scenario",level:3},{value:"Requirements",id:"requirements",level:3},{value:"Step by Step",id:"step-by-step",level:2},{value:"Checking Access (Excluding Contextual Data)",id:"checking-access-excluding-contextual-data",level:3},{value:"Take Time and IP Address into Consideration",id:"take-time-and-ip-address-into-consideration",level:3},{value:"Extend the Authorization Model",id:"extend-the-authorization-model",level:5},{value:"Add the required tuples to mark that Anne is in an approved context",id:"add-the-required-tuples-to-mark-that-anne-is-in-an-approved-context",level:5},{value:"Using contextual tuples",id:"using-contextual-tuples",level:3},{value:"Summary",id:"summary",level:2},{value:"Taking it a step further: Banks as a Service Authorization",id:"taking-it-a-step-further-banks-as-a-service-authorization",level:3},{value:"Related Sections",id:"related-sections",level:2}],p={toc:h};function m(e){var t=e.components,a=(0,o.Z)(e,s);return(0,i.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"contextual-and-time-based-authorization"},"Contextual and Time-Based Authorization"),(0,i.kt)(r.AH,{mdxType:"DocumentationNotice"}),(0,i.kt)("p",null,"This section explores some methods available to you to tackle some use-cases where the expected authorization check may depend on certain dynamic or contextual data (such as time, location, ip address, weather) that have not been written to the ",(0,i.kt)(r.rZ,{format:r.v7.ShortForm,mdxType:"ProductName"})," store."),(0,i.kt)(r.S1,{title:"When to use",appearance:"filled",description:(0,i.kt)("div",null,"Contextual Tuples should be used when modeling cases where a user's access to an object depends on the context of their request. For example:",(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"An employee\u2019s ability to access a document when they are connected to the company VPN or the api call is originating from an internal IP address."),(0,i.kt)("li",{parentName:"ul"},"A support engineer is only able to access a user's account during office hours."),(0,i.kt)("li",{parentName:"ul"},"If a user belongs to multiple organizations, they are only able to access a resource if they set a specific organization in their current context."))),mdxType:"CardBox"}),(0,i.kt)("h2",{id:"before-you-start"},"Before you start"),(0,i.kt)("p",null,"To follow this guide, you should be familiar with some ",(0,i.kt)(r.uH,{mdxType:"ProductConcept"}),"."),(0,i.kt)("p",null,"You also need to be familiar with:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Modeling Object-to-Object Relationships"),": You need to know how to create relationships between objects and how that might affect a user's relationships to those objects. ",(0,i.kt)("a",{parentName:"li",href:"/docs/modeling/building-blocks/object-to-object-relationships"},"Learn more \u2192")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Modeling Multiple Restrictions"),": You need to know how to model requiring multiple authorizations before allowing users to perform certain actions. ",(0,i.kt)("a",{parentName:"li",href:"/docs/modeling/multiple-restrictions"},"Learn more \u2192"))),(0,i.kt)(r.XQ,{mdxType:"Playground"}),(0,i.kt)("h3",{id:"scenario"},"Scenario"),(0,i.kt)("p",null,"For the scope of this guide, we are going to consider the following scenario."),(0,i.kt)("p",null,"Consider you are building the authorization model for WeBank Inc."),(0,i.kt)("p",null,"In order for an Account Manager at WeBank Inc. to be able to access a customer's account and its transactions, they would need to be:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"An account manager at the same branch as the customer's account"),(0,i.kt)("li",{parentName:"ul"},"Connected via the branch's internal network or through the branch's VPN"),(0,i.kt)("li",{parentName:"ul"},"Connected during this particular branch's office hours")),(0,i.kt)("p",null,"We will start with the following Authorization Model"),(0,i.kt)(r.lG,{configuration:{type_definitions:[{type:"branch",relations:{account_manager:{this:{}}}},{type:"account",relations:{branch:{this:{}},account_manager:{tupleToUserset:{tupleset:{object:"",relation:"branch"},computedUserset:{object:"",relation:"account_manager"}}},customer:{this:{}},viewer:{union:{child:[{computedUserset:{object:"",relation:"customer"}},{computedUserset:{object:"",relation:"account_manager"}}]}},can_view:{computedUserset:{object:"",relation:"viewer"}}}},{type:"transaction",relations:{account:{this:{}},can_view:{tupleToUserset:{tupleset:{object:"",relation:"account"},computedUserset:{object:"",relation:"viewer"}}}}}]},mdxType:"AuthzModelSnippetViewer"}),(0,i.kt)("details",null,(0,i.kt)("summary",null,"We are considering the case that:",(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Anne is the Account Manager at the West-Side branch"),(0,i.kt)("li",{parentName:"ul"},"Caroline is the customer for checking account number 526"),(0,i.kt)("li",{parentName:"ul"},"The West-Side branch is the branch that the checking account number 526 has been created at"),(0,i.kt)("li",{parentName:"ul"},"Checking account number 526 has a transaction, we'll call it transaction A"),(0,i.kt)("li",{parentName:"ul"},"The West-Side branch branch\u2019s office hours is from 8am-3pm UTC"))),(0,i.kt)("p",null,"The above state translates to the following relationship tuples:"),(0,i.kt)(r.Gb,{relationshipTuples:[{_description:"Anne is the Account Manager at the West-Side branch",user:"anne",relation:"account_manager",object:"branch:west-side"},{_description:"Caroline is the customer for checking account number 526",user:"caroline",relation:"customer",object:"account:checking-526"},{_description:"The West-Side branch is the branch that the Checking account number 526 has been created at",user:"branch:west-side",relation:"branch",object:"account:checking-526"},{_description:"Checking account number 526 is the account for transaction A",user:"account:checking-526",relation:"account",object:"transaction:A"}],mdxType:"WriteRequestViewer"})),(0,i.kt)("h3",{id:"requirements"},"Requirements"),(0,i.kt)("p",null,"By the end of this guide we would like to validate that:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"If Anne is at the branch, and it is 12pm UTC, Anne should be able to view transaction A"),(0,i.kt)("li",{parentName:"ul"},"If Anne is connecting remotely at 12pm UTC but is not connected to the VPN, Anne should not be able to view transaction A"),(0,i.kt)("li",{parentName:"ul"},"If Anne is connecting remotely and is connected to the VPN",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"at 12pm UTC, should be able to view transaction A"),(0,i.kt)("li",{parentName:"ul"},"at 6pm UTC, should not be able to view transaction A")))),(0,i.kt)("h2",{id:"step-by-step"},"Step by Step"),(0,i.kt)("p",null,"In order to solve for the requirements above, we will break the problem down to three steps:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Understand the authorization checks can be done with the existing model")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Ensure that the customer can view a transaction tied to their account"),(0,i.kt)("li",{parentName:"ul"},"Ensure that the account manager can view a transaction whose account is at the same branch")),(0,i.kt)("ol",{start:2},(0,i.kt)("li",{parentName:"ol"},"Extend the Authorization Model to take time and ip address into consideration"),(0,i.kt)("li",{parentName:"ol"},"Use contextual tuples for context related checks")),(0,i.kt)("h3",{id:"checking-access-excluding-contextual-data"},"Checking Access (Excluding Contextual Data)"),(0,i.kt)("p",null,"With the Authorization Model and relationship tuples shown above, ",(0,i.kt)(r.rZ,{format:r.v7.ShortForm,mdxType:"ProductName"})," has all the information needed to"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Ensure that the customer can view a transaction tied to their account"),(0,i.kt)("li",{parentName:"ul"},"Ensure that the account manager can view a transaction whose account is at the same branch")),(0,i.kt)("p",null,"We can verify that using the following checks"),(0,i.kt)(r.uT,{user:"anne",relation:"can_view",object:"transaction:A",allowed:!0,mdxType:"CheckRequestViewer"}),(0,i.kt)(r.uT,{user:"caroline",relation:"can_view",object:"transaction:A",allowed:!0,mdxType:"CheckRequestViewer"}),(0,i.kt)("p",null,"Additionally, we will check that Mary, an account manager at a different branch ",(0,i.kt)("em",{parentName:"p"},"cannot")," view transaction A."),(0,i.kt)(r.Gb,{relationshipTuples:[{_description:"Mary is an account manager at the East-Side branch",user:"mary",relation:"account_manager",object:"branch:east-side"}],mdxType:"WriteRequestViewer"}),(0,i.kt)(r.uT,{user:"mary",relation:"can_view",object:"transaction:A",allowed:!1,mdxType:"CheckRequestViewer"}),(0,i.kt)("p",null,"Note that so far, we have not prevented Anne from viewing the transaction outside office hours, let's see if we can do better."),(0,i.kt)("h3",{id:"take-time-and-ip-address-into-consideration"},"Take Time and IP Address into Consideration"),(0,i.kt)("h5",{id:"extend-the-authorization-model"},"Extend the Authorization Model"),(0,i.kt)("p",null,'In order to add time and ip address to our authorization model, we will add appropriate types for them. We will have a "timeslot" and an "ip-address-range" as types, and each can have users related to it as a user.'),(0,i.kt)(r.lG,{configuration:{type:"timeslot",relations:{user:{this:{}}}},mdxType:"AuthzModelSnippetViewer"}),(0,i.kt)(r.lG,{configuration:{type:"ip-address-range",relations:{user:{this:{}}}},mdxType:"AuthzModelSnippetViewer"}),(0,i.kt)("p",null,"We'll also need to introduce some new relations, and modify some others."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},'On the "branch" type:')),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},'Add "approved_timeslot" relation to mark than a certain timeslot is approved to view transactions for accounts in this branch'),(0,i.kt)("li",{parentName:"ul"},'Add "approved_ip_address_range" relation to mark than an ip address range is approved to view transactions for accounts in this branch'),(0,i.kt)("li",{parentName:"ul"},'Add "approved_context" relation to combine the two authorizations above (',(0,i.kt)("inlineCode",{parentName:"li"},"user from approved_timeslot and user from approved_ip_address_range"),"), and indicate that the user is in an approved context")),(0,i.kt)("p",null,"The branch type definition then becomes:"),(0,i.kt)(r.lG,{configuration:{type:"branch",relations:{account_manager:{this:{}},approved_ip_address_range:{this:{}},approved_timeslot:{this:{}},approved_context:{intersection:{child:[{tupleToUserset:{tupleset:{object:"",relation:"approved_timeslot"},computedUserset:{object:"",relation:"user"}}},{tupleToUserset:{tupleset:{object:"",relation:"approved_ip_address_range"},computedUserset:{object:"",relation:"user"}}}]}}}},mdxType:"AuthzModelSnippetViewer"}),(0,i.kt)("ol",{start:2},(0,i.kt)("li",{parentName:"ol"},'On the "account" type:')),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},'Add "account_manager_viewer" relation to combine the "account_manager" relationship and the new "approved_context" relation from the branch'),(0,i.kt)("li",{parentName:"ul"},'Update the "viewer" relation definition to point to "customer" (who can view without being subjected to contextual authorization) instead of "account_manager_viewer" (who needs to be within the branch allowed context to view)')),(0,i.kt)("p",null,"The account type definition then becomes:"),(0,i.kt)(r.lG,{configuration:{type:"account",relations:{branch:{this:{}},account_manager:{tupleToUserset:{tupleset:{object:"",relation:"branch"},computedUserset:{object:"",relation:"account_manager"}}},customer:{this:{}},account_manager_viewer:{intersection:{child:[{computedUserset:{object:"",relation:"account_manager"}},{tupleToUserset:{tupleset:{object:"",relation:"branch"},computedUserset:{object:"",relation:"approved_context"}}}]}},viewer:{union:{child:[{computedUserset:{object:"",relation:"customer"}},{computedUserset:{object:"",relation:"account_manager_viewer"}}]}},can_view:{computedUserset:{object:"",relation:"viewer"}}}},mdxType:"AuthzModelSnippetViewer"}),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},'On the "transaction" type:'),(0,i.kt)("ul",{parentName:"div"},(0,i.kt)("li",{parentName:"ul"},'Nothing will need to be done, as it will inherit the updated "viewer" relation definition from "account"')))),(0,i.kt)("h5",{id:"add-the-required-tuples-to-mark-that-anne-is-in-an-approved-context"},"Add the required tuples to mark that Anne is in an approved context"),(0,i.kt)("p",null,"Now that we have updated our authorization model to take time and ip address into consideration, you will notice that Anne has lost access because nothing indicates that Anne is connecting from an approved ip address and time. You can verify that by issuing the following check:"),(0,i.kt)(r.uT,{user:"anne",relation:"can_view",object:"transaction:A",allowed:!1,mdxType:"CheckRequestViewer"}),(0,i.kt)("p",null,"We need to add relationship tuples to mark some approved timeslots and ip address ranges:"),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("ul",{parentName:"div"},(0,i.kt)("li",{parentName:"ul"},"Here we added the time slots in increments of 1 hour periods, but this is not a requirement."),(0,i.kt)("li",{parentName:"ul"},"We did not add all the office hours to keep this guide shorter.")))),(0,i.kt)(r.Gb,{relationshipTuples:[{_description:"11am to 12pm is within the office hours of the West-Side branch",user:"timeslot:11_12",relation:"approved_timeslot",object:"branch:west-side"},{_description:"12pm to 1pm is within the office hours of the West-Side branch",user:"timeslot:12_13",relation:"approved_timeslot",object:"branch:west-side"},{_description:"The office VPN w/ the 10.0.0.0/16 address range is approved for the West-Side branch",user:"ip-address-range:10.0.0.0/16",relation:"approved_ip_address_range",object:"branch:west-side"}],mdxType:"WriteRequestViewer"}),(0,i.kt)("p",null,"Now that we have added the allowed timeslots and ip address ranges we need to add the following relationship tuples to give Anne access."),(0,i.kt)(r.Wz,{relationshipTuples:[{_description:"Anne is connecting from within the 10.0.0.0/16 ip address range",user:"anne",relation:"user",object:"ip-address-range:10.0.0.0/16"},{_description:"Anne is connecting between 12pm and 1pm",user:"anne",relation:"user",object:"timeslot:12_13"}],mdxType:"RelationshipTuplesViewer"}),(0,i.kt)("p",null,"If we have the above two tuples in the system, when checking whether Anne can view transaction A we should get a response stating that Anne can view it."),(0,i.kt)(r.uT,{user:"anne",relation:"can_view",object:"transaction:A",allowed:!0,mdxType:"CheckRequestViewer"}),(0,i.kt)("h3",{id:"using-contextual-tuples"},"Using contextual tuples"),(0,i.kt)("p",null,"Now that we know we can authorize based on present state, we have a different problem to solve. We are storing the tuples in the state in order for ",(0,i.kt)(r.rZ,{format:r.v7.ShortForm,mdxType:"ProductName"})," to evaluate them, which means that:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"For the case of the IP Address, we are not able to truly authorize based on the context of the request. E.g. if Anne was trying to connect from the phone and from the PC at the same time, and only the PC was connected to the VPN, how would ",(0,i.kt)(r.rZ,{format:r.v7.ShortForm,mdxType:"ProductName"})," know to deny one and allow the other if the data is stored in the state?"),(0,i.kt)("li",{parentName:"ul"},"On every check call we have to first write the correct tuples, then call the Check api, then clean up those tuples. This causes a substantial increase in latency as well as incorrect answers for requests happening in parallel (they could write/delete each other's tuples).")),(0,i.kt)("p",null,"How do we solve this? How do we tie the above two tuples to the context of the request instead of the system state?"),(0,i.kt)("p",null,"For Check calls, ",(0,i.kt)(r.rZ,{format:r.v7.ShortForm,mdxType:"ProductName"}),' has a concept called "',(0,i.kt)(r.uH,{section:"what-are-contextual-tuples",linkName:"Contextual Tuples",mdxType:"ProductConcept"}),'". Contextual Tuples are tuples that do ',(0,i.kt)("strong",{parentName:"p"},"not")," exist in the system state and are not written beforehand to ",(0,i.kt)(r.rZ,{format:r.v7.ShortForm,mdxType:"ProductName"}),". They are tuples that are sent alongside the Check request and will be treated as ",(0,i.kt)("em",{parentName:"p"},"if")," they already exist in the state for the context of that particular Check call."),(0,i.kt)("p",null,"When Anne is connecting from an allowed ip address range and timeslot, ",(0,i.kt)(r.rZ,{format:r.v7.ShortForm,mdxType:"ProductName"})," will return ",(0,i.kt)("inlineCode",{parentName:"p"},'{"allowed":true}'),":"),(0,i.kt)(r.uT,{user:"anne",relation:"can_view",object:"transaction:A",allowed:!0,contextualTuples:[{_description:"Anne is connecting from within the 10.0.0.0/16 ip address range",user:"anne",relation:"user",object:"ip-address-range:10.0.0.0/16"},{_description:"Anne is connecting between 12pm and 1pm",user:"anne",relation:"user",object:"timeslot:12_13"}],mdxType:"CheckRequestViewer"}),(0,i.kt)("p",null,"When Anne is connecting from a denied ip address range or timeslot, ",(0,i.kt)(r.rZ,{format:r.v7.ShortForm,mdxType:"ProductName"})," will return ",(0,i.kt)("inlineCode",{parentName:"p"},'{"allowed":false}'),":"),(0,i.kt)(r.uT,{user:"anne",relation:"can_view",object:"transaction:A",allowed:!1,contextualTuples:[{_description:"Anne is connecting from within the 10.0.0.0/16 ip address range",user:"anne",relation:"user",object:"ip-address-range:10.0.0.0/16"},{_description:"Anne is connecting between 6pm and 7pm",user:"anne",relation:"user",object:"timeslot:18_19"}],mdxType:"CheckRequestViewer"}),(0,i.kt)("h2",{id:"summary"},"Summary"),(0,i.kt)("details",null,(0,i.kt)("summary",null,"Final version of the Authorization Model and Relationship tuples"),(0,i.kt)(r.lG,{configuration:{type_definitions:[{type:"branch",relations:{account_manager:{this:{}},approved_ip_address_range:{this:{}},approved_timeslot:{this:{}},approved_context:{intersection:{child:[{tupleToUserset:{tupleset:{object:"",relation:"approved_timeslot"},computedUserset:{object:"",relation:"user"}}},{tupleToUserset:{tupleset:{object:"",relation:"approved_ip_address_range"},computedUserset:{object:"",relation:"user"}}}]}}}},{type:"account",relations:{branch:{this:{}},account_manager:{tupleToUserset:{tupleset:{object:"",relation:"branch"},computedUserset:{object:"",relation:"account_manager"}}},customer:{this:{}},account_manager_viewer:{intersection:{child:[{computedUserset:{object:"",relation:"account_manager"}},{tupleToUserset:{tupleset:{object:"",relation:"branch"},computedUserset:{object:"",relation:"approved_context"}}}]}},viewer:{union:{child:[{computedUserset:{object:"",relation:"customer"}},{computedUserset:{object:"",relation:"account_manager_viewer"}}]}},can_view:{computedUserset:{object:"",relation:"viewer"}}}},{type:"transaction",relations:{account:{this:{}},can_view:{tupleToUserset:{tupleset:{object:"",relation:"account"},computedUserset:{object:"",relation:"viewer"}}}}},{type:"timeslot",relations:{user:{this:{}}}},{type:"ip-address-range",relations:{user:{this:{}}}}]},mdxType:"AuthzModelSnippetViewer"}),(0,i.kt)(r.Gb,{relationshipTuples:[{_description:"Anne is the Account Manager at the West-Side branch",user:"anne",relation:"account_manager",object:"branch:west-side"},{_description:"Caroline is the customer for checking account number 526",user:"caroline",relation:"customer",object:"account:checking-526"},{_description:"The West-Side branch is the branch that the Checking account number 526 has been created at",user:"branch:west-side",relation:"branch",object:"account:checking-526"},{_description:"Checking account number 526 is the account for transaction A",user:"account:checking-526",relation:"account",object:"transaction:A"},{_description:"8am to 9am is within the office hours of the West-Side branch",user:"timeslot:8_9",relation:"approved_timeslot",object:"branch:west-side"},{_description:"9am to 10am is within the office hours of the West-Side branch",user:"timeslot:9_10",relation:"approved_timeslot",object:"branch:west-side"},{_description:"10am to 11am is within the office hours of the West-Side branch",user:"timeslot:10_11",relation:"approved_timeslot",object:"branch:west-side"},{_description:"11am to 12pm is within the office hours of the West-Side branch",user:"timeslot:11_12",relation:"approved_timeslot",object:"branch:west-side"},{_description:"12pm to 1pm is within the office hours of the West-Side branch",user:"timeslot:12_13",relation:"approved_timeslot",object:"branch:west-side"},{_description:"1pm to 2pm is within the office hours of the West-Side branch",user:"timeslot:13_14",relation:"approved_timeslot",object:"branch:west-side"},{_description:"2pm to 3pm is within the office hours of the West-Side branch",user:"timeslot:14_15",relation:"approved_timeslot",object:"branch:west-side"},{_description:"The office VPN w/ the 10.0.0.0/16 address range is approved for the West-Side branch",user:"ip-address-range:10.0.0.0/16",relation:"approved_ip_address_range",object:"branch:west-side"}],mdxType:"WriteRequestViewer"})),(0,i.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"Warning")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Contextual tuples:"),(0,i.kt)("ul",{parentName:"div"},(0,i.kt)("li",{parentName:"ul"},"Are not persisted in the store."),(0,i.kt)("li",{parentName:"ul"},"Are only supported on the ",(0,i.kt)("a",{parentName:"li",href:"/api/service#/Relationship%20Queries/Check"},"Check API endpoint"),". They are not supported on read, expand and other endpoints."),(0,i.kt)("li",{parentName:"ul"},"If you are using the ",(0,i.kt)("a",{parentName:"li",href:"/api/service#/Relationship%20Tuples/ReadChanges"},"ReadChanges API endpoint")," to build a permission aware search index, note that it will not be trivial to take contextual tuples into account.")))),(0,i.kt)("h3",{id:"taking-it-a-step-further-banks-as-a-service-authorization"},"Taking it a step further: Banks as a Service Authorization"),(0,i.kt)("p",null,"In order to keep this guide concise, we assumed you were modeling for a single bank. What if you were offering a multi-tenant service where each bank is a single tenant?"),(0,i.kt)("p",null,"In that case, we can extend the model like so:"),(0,i.kt)(r.lG,{configuration:{type_definitions:[{type:"bank",relations:{admin:{this:{}}}},{type:"branch",relations:{bank:{this:{}},account_manager:{this:{}},approved_ip_address_range:{this:{}},approved_timeslot:{this:{}},approved_context:{intersection:{child:[{tupleToUserset:{tupleset:{object:"",relation:"approved_timeslot"},computedUserset:{object:"",relation:"user"}}},{tupleToUserset:{tupleset:{object:"",relation:"approved_ip_address_range"},computedUserset:{object:"",relation:"user"}}}]}}}},{type:"account",relations:{branch:{this:{}},account_manager:{tupleToUserset:{tupleset:{object:"",relation:"branch"},computedUserset:{object:"",relation:"account_manager"}}},customer:{this:{}},account_manager_viewer:{intersection:{child:[{computedUserset:{object:"",relation:"account_manager"}},{tupleToUserset:{tupleset:{object:"",relation:"branch"},computedUserset:{object:"",relation:"approved_context"}}}]}},viewer:{union:{child:[{computedUserset:{object:"",relation:"customer"}},{computedUserset:{object:"",relation:"account_manager_viewer"}}]}},can_view:{computedUserset:{object:"",relation:"viewer"}}}},{type:"transaction",relations:{account:{this:{}},can_view:{tupleToUserset:{tupleset:{object:"",relation:"account"},computedUserset:{object:"",relation:"viewer"}}}}},{type:"timeslot",relations:{user:{this:{}}}},{type:"ip-address-range",relations:{user:{this:{}}}}]},mdxType:"AuthzModelSnippetViewer"}),(0,i.kt)("h2",{id:"related-sections"},"Related Sections"),(0,i.kt)(r.$q,{description:"Check the following sections for more on how user groups can be used.",relatedLinks:[{title:"Object to Object Relationships",description:"Learn how objects can relate to one another and how that can affect user's access.",link:"./building-blocks/object-to-object-relationships",id:"./building-blocks/object-to-object-relationships.mdx"},{title:"Modeling with Multiple Restrictions",description:"Learn how to model requiring multiple relationships before users are authorized to perform certain actions.",link:"./multiple-restrictions",id:"./multiple-restrictions.mdx"},{title:"{ProductName} API",description:"Details on the Check API in the {ProductName} reference guide.",link:"/api/service#/Relationship%20Queries/Check"}],mdxType:"RelatedSection"}))}m.isMDXComponent=!0}}]);