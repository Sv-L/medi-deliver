export const toLocaleDateString=(date) => {
    const registerDate = new Date(date);
            const formattedDate = registerDate.toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
            });
    return formattedDate;
}