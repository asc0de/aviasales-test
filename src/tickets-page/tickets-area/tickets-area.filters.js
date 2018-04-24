export const getTransferFilter = number => {
    return tickets => {
        return tickets.filter(ticket => ticket.stops === number);
    }
}

export const getAllTransfersFilter = tickets => {
    return tickets;
}

const removeDuplicates = (tickets, prop) => {
    return tickets.filter((filteredTicket, position) => {
        return tickets.map(t => t[prop]).indexOf(filteredTicket[prop]) === position;
    });
}

export const getFilteredTickets = (tickets, filters) => {
    const selectedFilters = [];
    if (filters.noTransfers) selectedFilters.push(getTransferFilter(0));
    if (filters.allTransfers) selectedFilters.push(getAllTransfersFilter);
    if (filters.oneTransfer) selectedFilters.push(getTransferFilter(1));
    if (filters.twoTransfers) selectedFilters.push(getTransferFilter(2));
    if (filters.threeTransfers) selectedFilters.push(getTransferFilter(3));

    if (!selectedFilters.length) return tickets;

    let filteredTickets = selectedFilters.map(filter => {
        return filter(tickets);
    });

    filteredTickets = filteredTickets.reduce((result, filteredTickets) => {
        result = [...result, ...filteredTickets];
        return result;
    }, []);

    filteredTickets = removeDuplicates(filteredTickets, 'price');

    return filteredTickets;
}