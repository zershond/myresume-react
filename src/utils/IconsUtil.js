import React from 'react';
import { 
    FaGithubSquare, 
    FaServer, 
    FaClipboardList ,
    FaChevronDown,
    FaChevronUp
} from 'react-icons/fa';

const iconMap = {
    'FaGithubSquare': <FaGithubSquare />,
    'FaServer': <FaServer />,
    'FaClipboardList': <FaClipboardList />,
    'FaChevronDown': <FaChevronDown />,
    'FaChevronUp': <FaChevronUp />
}

export const getIconByName = (iconName) => iconMap[iconName];