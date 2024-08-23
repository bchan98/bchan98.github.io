import AppBar from '@mui/material/AppBar';

export default function Home() {
    return (
        <div>
            Hello world!
            <div id="landing-page"></div>
            {
                // landing image with animation, my name is Brendan Chan, a software engineer, provide link to download cv/contact me which drags to bottom
            }
            <div id="qualifications"></div>
            {
                // work experience - dataannotation tech, skills with typescript, javascript, python etc 
            }
            <div id="portfolio"></div>
            {
                // show 3 projects - ballersim.app, links to appointmentproject, inventory manager, todolist/deliverysim?
            }
            <div id="contact"></div>
            {
                // show box for contact me, include link to linkedin/github
            }
        </div>
    );
}
