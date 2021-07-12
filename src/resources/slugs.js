export default {
    // private Warden
    dashboard : '/dashboard',
    requests : '/dashboard/requests',
    hostellers : '/dashboard/hostellers',
    hostellersView : '/dashboard/hostellers/:hostellerid',
    hostellersEdit : '/dashboard/hostellers/edit/:hostellerid',
    hostellersCreate : '/dashboard/hostellers/create',

    queries : '/dashboard/queries',
    queriesView : '/dashboard/queries/:queryid',

    documents : '/dashboard/documents',
    documentsView : '/dashboard/documents/:docid',
    documentsEdit : '/dashboard/documents/edit/:docid',
    documentCreate : '/dashboard/documents/create',


    notices : '/dashboard/notices',
    noticesView : '/dashboard/notices/:noticeid',
    noticeCreate : '/dashboard/notices/create',




    //private Hosteler

    profile : '/hosteller/profile',
    noticeBoard : '/hosteller/notices',
    query : '/hosteller/query',
    bill : '/hosteller/bill',

    // auth

    home : '/home',
    loginWarden: '/warden/login',
    signupWarden: '/warden/signup',
    loginHosteller: '/hosteller/login',
    signupHosteller: '/hosteller/signup'
};
