import { createServer } from 'miragejs'

export function makeServer() {
    const server = createServer({
        routes() {
            this.namespace = 'api'

            this.get('/invoice', () => {
                return {
                    inv_number: 'INV-2022-10',
                    issued_date: '11 Jan 2022',
                    due_date: '11 Jan 2022',
                    address: 'Zaky Grizzly, Moonlight Agency LTD , New York USA',
                    items: [{
                        name: 'Payment Project - Mobile Design',
                        hour: '100',
                        rate: 40.00,
                        tax: 0.00,
                        total: 4800
                    }]
                }
            })

            this.get('/user', () => {
                return {
                    name: 'Dipa inhouse',
                    email: 'house@dipainhouse.com',
                    address: 'ijeun Boluvard Street 101 Monland City 65115 East Java indonesia',
                }
            })
        },
    });
    return server;
}

makeServer();