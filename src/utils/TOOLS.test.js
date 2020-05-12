import TOOLS from './TOOLS';

test('should output something', () => {
    const arr = [
        {one:"one", two:'two'},
        {one:"one", two:'two'},
        {one:"one", two:'two'},
        {one:"one", two:'two'},
        {one:"one", two:'two'},
        {one:"one", two:'two'}
    ]
    const expected = [
        [
            {one:"one", two:'two'},
            {one:"one", two:'two'}
        ],
        [
            {one:"one", two:'two'},
            {one:"one", two:'two'}
        ],
        [
            {one:"one", two:'two'},
            {one:"one", two:'two'}
        ]
    ]
    const chunks = TOOLS.chunk(arr, 2);
    expect(chunks).toEqual(expect.arrayContaining(expected));
});

test('should output something', () => {
    const data = [
        { address1: "501 Prince George St", attire: "business casual", city: "Williamsburg", genre: "American,Seafood,International,Asian,Cafe", hours: "Tue-Sat 10:00 AM-5:30 PM"},
        { address1: "677 Broadway", attire: "business casual", city: "Albany", genre: "Steak,American,Seafood,International,Traditional", hours: "Mon-Fri 11:30 AM-10:00 PM; Sat 5:30 PM-10:00 PM"},
        { address1: "1100 N Tuttle Ave", attire: "casual", city: "Sarasota", genre: "European,French,Seafood,Belgian,Vegetarian", hours: "Mon-Sat 5:00 PM-9:00 PM"},
        { address1: "1200 Dobbins Rd", attire: "business casual", city: "Banner Elk", genre: "American,Contemporary", hours: "Tue-Sun 5:30 PM-10:00 PM"}
    ]
    const expected = ["All Genres", "American", "Seafood", "International", "Asian", "Cafe", "Steak", "Traditional", "European", "French", "Belgian", "Vegetarian", "Contemporary"];
    const genres = TOOLS.getGenres(data);
    expect(genres).toEqual(expect.arrayContaining(expected));
});