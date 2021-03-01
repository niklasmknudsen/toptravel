import React from 'react';
import '../assets/styles/pages/pagecontact.scss';
import '.././App.scss';
import OrganismHeader from '../organisms/OrganismHeader';
import TemplateContactForm from '../templates/TemplateContactForm';

class PageContact extends React.Component {

    constructor(props) {
        super(props);
        this.state = {

        };
    }


    render() {
        return (
            <article id="page-contact">
                <OrganismHeader />
                <div class="page-contact__grid">
                    <section className="grid-column__left">
                        <TemplateContactForm />
                    </section>
                    <section className="grid-column__right">
                        <iframe width="100%" height="600" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"
                            src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=1%20Grafton%20Street,%20Dublin,%20Ireland+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">
                        </iframe>
                    </section>
                </div>
            </article>
        );
    };
}


export default PageContact;