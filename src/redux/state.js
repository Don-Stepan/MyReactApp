
let state = {
    sidebar: {
        navBarItems: [
            {id: 1, path: '/profile', title: 'Profile'},
            {id: 2, path: '/dialogs', title: 'Messages'},
            {id: 3, path: '/news', title: 'News'},
            {id: 4, path: '/music', title: 'Music'},
            {id: 5, path: '/settings', title: 'Settings'}
        ]
    },
    pages: {
        profilePage: {
            profileMyPosts: [
                {id: 1, message: 'ho ho ho hiiiiiii', likes: '3'},
                {id: 2, message: 'robot chapi', likes: '5'},
                {id: 3, message: 'noup ho ho', likes: '7'}
            ]
        },
        dialogsPage: {
            dialogs: [
                {id: 1, name: 'Customer1'},
                {id: 2, name: 'Customer2'},
                {id: 3, name: 'Customer3'},
                {id: 4, name: 'Customer4'},
                {id: 5, name: 'Customer5'},
                {id: 6, name: 'Customer6'}
            ],
            messages: [
                {id: 1, message: 'hi hi hi'},
                {id: 2, message: 'ho ho ho'},
                {id: 3, message: 'Yo'},
                {id: 4, message: 'Noup'}
            ]
        }
    }
}

export default state;