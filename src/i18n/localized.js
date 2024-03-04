import { useIntl } from 'react-intl';
import labels from './labels';
import text from './text';
const LocalizedText = ({ dataSource, key, locale }) => {
    const intl = useIntl();
    const getLocalizedText = () => {
        const currentLocale = locale || intl.locale;

        let data;

        if (dataSource === 'message') {

        } else if (dataSource === 'labels') {
            data = labels;
        } else if (dataSource === 'text') {
            data = text;
            // Add more data sources as needed
            // data = yourTextDataSource;
        }

        return data ? (data[currentLocale] && data[currentLocale][key]) || key : key;
    };

    return getLocalizedText();
};

export default LocalizedText;