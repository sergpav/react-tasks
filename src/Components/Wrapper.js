import { Component } from 'react';
import styles from '../style.module.scss';
import { GuestListForm } from './GuestListForm';
import { GuestListTable } from './GuestListTable';

export class Wrapper extends Component {
    constructor(props) {
        super(props);
        this.state  = {
            guests: []
        }
        this.storeGuests = this.storeGuests.bind(this);
        this.setVisitStatus = this.setVisitStatus.bind(this);
    }

    storeGuests(guestInfo) {
        this.setState({guests: [...this.state.guests, guestInfo]});
    }

    setVisitStatus(e) {
        const input = e.target;
        const id = + input.dataset.id;
        if(id === undefined) return false;
        const currentGuest = this.state.guests[id];
        if(currentGuest === undefined) return false;
        this.setState({
            guests: this.state.guests.map((guest, uid) => {
                return id === uid ? {...guest, ...{visit: input.checked} } : guest
            })
        });
    }

    render() {
        return (
            <div className={ styles.wrapper }>
                <GuestListForm
                    storeGuests={this.storeGuests}
                />
                <GuestListTable 
                    guests={this.state.guests}
                    setVisitStatus={this.setVisitStatus}
                />
            </div>
        );
    }
}