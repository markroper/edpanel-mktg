import React from 'react';

/**
 * The Motto component is the overlay the EdPanel slogan
 */
export default class extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        //The style of the slogan this will be inserted inline. This allows you to have your css
        //co-located with your html. I'm not sure if this is best practices, but I liked being able to fix
        //it all in one spot.
        let mottoStyle = {
            lineHeight: '51px',
            color: '#ffffff',
            textShadow: 'black 0.1em 0.1em 0.2em'
        };

        let containerStyle = {
            top:'0',
            paddingTop: '100px',
            position: 'absolute',
            width: '100%',
            textAlign: 'center',
            height: '555px',
            backgroundImage: 'url(/assets/images/notebookWithHandCroppedBlue.png)',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center center'
        };

        //It would be great if this worked more like a carousel or something of that nature, but at least there's something
        // on the page
        return (
            <div style={containerStyle}>
                <h1 id="motto" style={mottoStyle}>Let data drive your school</h1>
            </div>
        );
    }
}
