import { useState, useEffect } from 'react';
import { Page } from 'src/components'

import Layout from 'src/layouts';

import { updateIndustryCounts } from 'src/utils/industryLogic'

import { MainFeedBackForm } from 'src/components/feedBackForms/mainFeedBackForm'

import {
    HomeHeaderSection,
    HomeIndustriesOfWork,
} from '../components'



export default function HomeView() {

    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('/api/services')
            .then(response => response.json())
            .then(data => setServices(data));
    }, []);

    const [updatedIndustries, setUpdatedIndustries] = useState([]);

    useEffect(() => {
        fetch('/api/projects')
            .then(response => response.json())
            .then(data => {
                const industries = updateIndustryCounts(data);
                setUpdatedIndustries(industries);
            });
    }, []);

    return (
        <Page title='Чистоград ПМК | Проектируем и производим металлоконструкции в Калининграде и области'>
            <HomeHeaderSection services={services} />

            <HomeIndustriesOfWork industries={updatedIndustries} />

            <MainFeedBackForm sourcePage={`Форма отправлена со страницы "Главная"`} />
        </Page>
    );
}

HomeView.getLayout = function getLayout(page) {
    return <Layout transparentHeader>{page}</Layout>;
}