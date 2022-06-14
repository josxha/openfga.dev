"use strict";(self.webpackChunkopenfga_dev=self.webpackChunkopenfga_dev||[]).push([[8128],{79460:function(t,e,a){a.r(e),a.d(e,{assets:function(){return h},contentTitle:function(){return d},default:function(){return m},frontMatter:function(){return c},metadata:function(){return u},toc:function(){return p}});var n=a(87462),o=a(63366),i=(a(67294),a(3905)),r=a(6737),s=["components"],c={title:"Authorization and OpenFGA",description:"Introduction to Authorization and OpenFGA",sidebar_position:1,slug:"/authorization-and-openfga"},d="Introduction to Authorization and <ProductName format={ProductNameFormat.LongForm}/>",u={unversionedId:"content/authorization-and-openfga",id:"content/authorization-and-openfga",title:"Authorization and OpenFGA",description:"Introduction to Authorization and OpenFGA",source:"@site/docs/content/authorization-and-openfga.mdx",sourceDirName:"content",slug:"/authorization-and-openfga",permalink:"/docs/authorization-and-openfga",draft:!1,editUrl:"https://github.com/openfga/openfga.dev/edit/main/docs/content/authorization-and-openfga.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Authorization and OpenFGA",description:"Introduction to Authorization and OpenFGA",sidebar_position:1,slug:"/authorization-and-openfga"},sidebar:"docs",next:{title:"Concepts",permalink:"/docs/concepts"}},h={},p=[{value:"What is OpenFGA?",id:"what-is-openfga",level:2},{value:"Authentication vs Authorization",id:"authentication-vs-authorization",level:2},{value:"What is Fine-Grained Authorization (FGA)?",id:"what-is-fine-grained-authorization-fga",level:2},{value:"What are Role-Based Access Control (RBAC) and Attribute-Based Access Control (ABAC)?",id:"what-are-role-based-access-control-rbac-and-attribute-based-access-control-abac",level:2},{value:"What is Relationship Based Access Control (ReBAC)?",id:"what-is-relationship-based-access-control-rebac",level:2},{value:"What is Zanzibar?",id:"what-is-zanzibar",level:2}],l={toc:p};function m(t){var e=t.components,a=(0,o.Z)(t,s);return(0,i.kt)("wrapper",(0,n.Z)({},l,a,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"introduction-to-authorization-and-"},"Introduction to Authorization and ",(0,i.kt)(r.rZ,{format:r.v7.LongForm,mdxType:"ProductName"})),(0,i.kt)(r.AH,{mdxType:"DocumentationNotice"}),(0,i.kt)("p",null,"This section explains ",(0,i.kt)("a",{parentName:"p",href:"#what-is-authorization"},"authorization"),", ",(0,i.kt)("a",{parentName:"p",href:"#what-is-fine-grained-authorization-fga"},"fine-grained authorization"),", ",(0,i.kt)("a",{parentName:"p",href:"#what-are-role-based-access-control-rbac-and-attribute-based-access-control-abac"},"RBAC"),", ",(0,i.kt)("a",{parentName:"p",href:"#what-are-role-based-access-control-rbac-and-attribute-based-access-control-abac"},"ABAC"),", ",(0,i.kt)("a",{parentName:"p",href:"#what-is-relationship-based-access-control-rebac"},"ReBAC"),"."),(0,i.kt)("h2",{id:"what-is-openfga"},"What is OpenFGA?"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"OpenFGA")," is an open source ",(0,i.kt)("a",{parentName:"p",href:"#what-is-fine-grained-authorization-fga"},"Fine-Grained Authorization")," solution based on Google's ",(0,i.kt)("a",{parentName:"p",href:"#what-is-zanzibar"},"Zanzibar"),". It was created by the ",(0,i.kt)("a",{parentName:"p",href:"https://docs.fga.dev/"},"Auth0 FGA")," team and welcomes community contribution. OpenFGA is designed to make it easy for application builders to quickly add fine-grained authorization to their applications. It offers an HTTP API and has SDKs for programming languages including Node.js/JavaScript and GoLang. More SDKs and integrations such as Rego are planned for the future. OpenFGA is designed and optimized for reliability and low latency at a high scale."),(0,i.kt)(r.XQ,{intro:!0,mdxType:"Playground"}),(0,i.kt)("h2",{id:"authentication-vs-authorization"},"Authentication vs Authorization"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://auth0.com/intro-to-iam/what-is-authentication/"},(0,i.kt)("strong",{parentName:"a"},"Authentication"))," (or AuthN) is a process that ensures a user's identity. ",(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Authorization"},(0,i.kt)("strong",{parentName:"a"},"Authorization"))," (or AuthZ) means determining if a user can perform a certain action on a particular resource."),(0,i.kt)("p",null,"For example, when logging in to Twitter, the process in which Twitter verifies the user's username and password are correct is Authentication. The process of checking if that user can view or reply to a certain Tweet is Authorization."),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://www.okta.com/identity-101/authentication-vs-authorization/"},"Read more about AuthN vs AuthZ"),"."),(0,i.kt)("h2",{id:"what-is-fine-grained-authorization-fga"},"What is Fine-Grained Authorization (FGA)?"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Fine-Grained Authorization")," is being able to grant individual users access to specific objects or resources in a system. FGA at Scale means being able to do so in a system that can have millions (or billions or even more) of objects, users and relations, and has a high change rate - objects are regularly added and access permissions are constantly being updated. A good example of this is Google Drive - access can be granted either to documents, or folders; it can be granted to users individually or as a group. Access regularly changes as new documents are created and shared with specific users, whether inside the same company or outside."),(0,i.kt)("h2",{id:"what-are-role-based-access-control-rbac-and-attribute-based-access-control-abac"},"What are Role-Based Access Control (RBAC) and Attribute-Based Access Control (ABAC)?"),(0,i.kt)("p",null,"In ",(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Role-based_access_control"},(0,i.kt)("strong",{parentName:"a"},"Role-Based Access Control")),", permissions are assigned to users based on their role in a system (e.g. a user would need an ",(0,i.kt)("inlineCode",{parentName:"p"},"editor")," role to edit posts)."),(0,i.kt)("p",null,"In ",(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Attribute-based_access_control"},(0,i.kt)("strong",{parentName:"a"},"Attribute-Based Access Control")),", instead of permissions being granted based on roles, they are granted based on a set of attributes on a user or resource (e.g. if a user has both ",(0,i.kt)("inlineCode",{parentName:"p"},"marketing")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"manager")," attributes they can publish and delete posts that have a ",(0,i.kt)("inlineCode",{parentName:"p"},"marketing")," attribute, but not others)."),(0,i.kt)("p",null,"If you are interested you can read more about ",(0,i.kt)("a",{parentName:"p",href:"https://auth0.com/docs/authorization/rbac"},"RBAC")," and ",(0,i.kt)("a",{parentName:"p",href:"https://www.okta.com/blog/2020/09/attribute-based-access-control-abac/"},"ABAC"),"."),(0,i.kt)("h2",{id:"what-is-relationship-based-access-control-rebac"},"What is Relationship Based Access Control (ReBAC)?"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"ReBAC")," allows expressing rules based on relations that users have with objects and that objects have with other objects. For example, a user can view a document if they can view its parent folder."),(0,i.kt)("h2",{id:"what-is-zanzibar"},"What is Zanzibar?"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("a",{parentName:"strong",href:"https://research.google/pubs/pub48190/"},"Zanzibar")),' is "Google\'s Consistent, Global Authorization System" for "determining whether online users are authorized to access digital objects" across their products (Google Drive, YouTube, Google Photos, etc..). It uses (object, relation, user) tuples to store relation data and traverses those relations to check if there is a relation between a user and an object.'),(0,i.kt)("p",null,"Learn more about Zanzibar at the ",(0,i.kt)("a",{parentName:"p",href:"https://zanzibar.academy"},"Zanzibar Academy"),"."))}m.isMDXComponent=!0}}]);