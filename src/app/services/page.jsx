import LayoutStyle7 from '@/components/Layouts/LayoutStyle7';
import PartnerStyle1 from '@/components/partner/PartnerStyle1';
import ProcessStyle1 from '@/components/process/ProcessStyle1';
import RequestCallStyle1 from '@/components/request/RequestCallStyle1';
import ServicesStyle1 from '@/components/services/ServicesStyle1';
import TeamStyle1 from '@/components/team/TeamStyle1';
import React from 'react';

export const metadata = {
    title: "Consua - Consulting Business - Services"
}

const ServicesPage = () => {
    return (
        <>
            <LayoutStyle7 breadCrumb="services" title="Our Services">
                <ServicesStyle1 />
                <ProcessStyle1 />
                <PartnerStyle1 sectionClass="default-padding bg-gray" />
                <TeamStyle1 teamTitle={true} />
            </LayoutStyle7>
        </>
    );
};

export default ServicesPage;