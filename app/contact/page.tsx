import IconHeadingTextItem from "../components/IconHeadingTextItem";
import PhoneIcon from "@/public/contact/phone.svg";
import EmailIcon from "@/public/contact/email.svg";
import ComputerIcon from "@/public/contact/computer.svg";

type ContactDetails = {
    phone: string;
    email: string;
    location: string;
    mapViewEmbedUrl: string;
}

export default function Contact() {
    const contactDetails: ContactDetails = {
            phone: "+603-5121-9359",
            email: "admin@insutex.my",
            location: "No. 31, Jalan Tambur 33/19, Shah Alam Technology Park, Sekysen 33, 40400, Shah Alam, Selangor Darul Ehsan, Malaysia",
            mapViewEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3984.2664296332878!2d101.5453907!3d3.0229565!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cdb2bf354d15a9%3A0x4442399967087abc!2sInsutex%20Industries%20Sdn.%20Bhd.!5e0!3m2!1sen!2sus!4v1749360186520!5m2!1sen!2sus",
        };

    return (
        <main>
            <section>
                <div className="bg-contact bg-cover bg-center p-20 text-center">
                    <h1 className="text-neutral-white my-10">Contact Us</h1>
                </div>
            </section>
            <section>
                <div className="p-20 grid grid-cols-3 gap-12 text-lg">
                    <IconHeadingTextItem icon={PhoneIcon} alt="Phone" text={`Call us at \n${contactDetails.phone}`}/>
                    <IconHeadingTextItem icon={EmailIcon} alt="Email" text={`Email us at \n${contactDetails.email}`}/>
                    <IconHeadingTextItem icon={ComputerIcon} alt="Computer" text={`We’ll be with you as soon \nas possible!`} />
                </div>
            </section>
            <section>
                <div className="flex items-center mx-20 mb-40 bg-primary-light">
                    <div className="w-1/2">
                        <iframe 
                                src={contactDetails.mapViewEmbedUrl}
                                width="100%"
                                height="450"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy" 
                                referrerPolicy="no-referrer-when-downgrade"
                            />
                    </div>
                    <div className="w-1/2 text-center p-10">
                        <h2 className="uppercase mb-4">Location</h2>
                        <p className="text-lg mb-8">
                            {contactDetails.location}
                        </p>
                    </div>
                </div>
            </section>
        </main>
    );
}