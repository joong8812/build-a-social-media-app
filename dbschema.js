let db = {
    users: [
        {
        userId: 'wekjrlj3owelv1',
        email: 'user@gmail.com',
        handle: 'user',
        createdAt: '2020-04-03T13:39:42.573Z',
        imageUrl: 'image/asdkfjwqerqw/alsdjfoiq',
        bio: 'Hello, my name is user, nice to meet you',
        website: 'https://user.com',
        location: 'Toronto, Canada'
        }
    ],
    screams: [
        {
            userHandle: 'user',
            body: 'this is the scream body',
            createdAt: '2020-03-31T20:30:02.573Z',
            likecount: 5,
            commentCount: 2
        }
    ],
    comments: [
        {
            userHandle: 'user',
            screamId: 'qlekwjrsadzxcv',
            body: 'nice one mate!',
            createdAt: '2020-04-03T20:30:02.573Z'
        }
    ],
    notification: [
        {
            recipient: 'user',
            sender: 'john',
            read: 'true | false',
            screamId: 'qlekwjrsadzxcv',
            type: 'like | comment',
            createdAt: '2020-04-03T20:30:02.573Z'
        }
    ]
}

const userDetails = {
    // Redux data
    credentials: {
        userId: 'QWELKRJ1234FJ321FJ',
        email: 'user@gmail.com',
        handle: 'user',
        createdAt: '2020-04-03T13:39:42.573Z',
        imageUrl: 'image/asdkfjwqerqw/alsdjfoiq',
        bio: 'Hello, my name is user, nice to meet you',
        website: 'https://user.com',
        location: 'Toronto, Canada'
    },
    likes: [
        {
            userHandle: 'user',
            screamId: 'hh7O5WfWucVzGbHH2pa'
        },
        {
            userHandle: 'user',
            screamId: '3IOnFoQexRcofs5OhBXO'
        }
    ]
}