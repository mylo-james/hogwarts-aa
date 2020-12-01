'use strict';

const numBetween = (min, max) => {
    return Math.floor(Math.random() * max) + min;
};

const names = [
    'Adam Faidy',
    'Ahdari Scott',
    'Ameera Gates',
    'Andrew Cohen',
    'Andrew Dotterer',
    'Angelica Wilson',
    'Anna Bullard',
    'Antara Jaima',
    'Arianna Johnson',
    'Arjun Narain',
    'Autumn Wiggins',
    'Barry Mattern',
    'Bryant Klein',
    'Chad Calcote',
    'Chris Read',
    'Chris Clark',
    'Chris Sorini',
    'River Cha',
    'Dak Benger',
    'Dan Chin',
    'Daniel Miller',
    'Jimmy Sherrod',
    'Derek Nungesser',
    'Dez Adkins',
    'Elyse Steingold',
    'Erick Bravo',
    'Giiaga Agha',
    'Greg Gardini',
    'Jacob Premo',
    'James Monaco',
    'Jerzy Horst',
    'Jesse Lindloff',
    'JM Summers',
    'Jummy Park',
    'Kimi Zou',
    'Kristen Florey',
    'Lane Smit',
    'Matthew Hasan',
    'Michael Sanford',
    'Mishe Yi',
    'Mustafa Mousa',
    'Nhu-Y Phan',
    'Nick Bierman',
    "Nichole O'Brien",
    'Nick Menon',
    'Ramses Romero',
    'Rihana Chang',
    'Ryan Webster',
    'Sami Butler',
    'Samuel Nunn',
    'Seth Witfoth',
    'Tanner Schmutte',
    'Thanh Nguyen',
    'Tony Ngo',
    'Ty Newman',
    'William Vincent',
];

const students = names.map((student) => {
    return {
        name: student,
        houseId: numBetween(1, 4),
        teacher: false,
        createdAt: new Date(),
        updatedAt: new Date(),
    };
});

const teachers = [
    {
        name: 'Mylo James',
        houseId: 4,
        teacher: true,
        createdAt: new Date(),
        updatedAt: new Date(),
    },
    {
        name: 'JD Richards',
        houseId: 1,
        teacher: true,
        createdAt: new Date(),
        updatedAt: new Date(),
    },
    {
        name: 'James Robertson',
        houseId: 3,
        teacher: true,
        createdAt: new Date(),
        updatedAt: new Date(),
    },
    {
        name: 'Nish Arya',
        houseId: 2,
        teacher: true,
        createdAt: new Date(),
        updatedAt: new Date(),
    },
];

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert(
            'Users',
            [...teachers, ...students],
            {}
        );
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('Users', null, {});
    },
    students,
    teachers,
    numBetween,
};
