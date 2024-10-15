import React from 'react';
import styled from 'styled-components';

interface DefaultTabsItemProps {
	key: string;
	label: string;
	icon?: string;
	iconPosition?: 'left' | 'right';
}

interface DefaultTabsProps {
	items: DefaultTabsItemProps[];
	defaultActiveKey?: string;
	onTabChange: (key: string) => void;
}

const Wrapper = styled.div`
    position: relative;
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    justify-content: flex-start;
    margin: 1rem 0;
`;

const ItemWrapper = styled.div<{ active: boolean }>`
    position: relative;
    display: block;
    padding: 1rem 0.5rem;
    font-size: 14px;
	font-weight: 600;
    text-transform: uppercase;
    color: ${props => props.theme.appDefaultTextColor};
    opacity: ${props => props.active ? 1 : 0.35};

    cursor: pointer;
    user-select: none;
    pointer-events: ${props => props.active ? 'none' : 'auto'};
	transition: all 0.3s ease;

    &:hover {
        opacity: 0.5;
    }
`;

export const DefaultTabs: React.FC<DefaultTabsProps> = props => {
	const { items, defaultActiveKey, onTabChange } = props;
	const [activeKey, setActiveKey] = React.useState<string>(defaultActiveKey ?? items.at(0)?.key!);

	const handleItemClick = (key: string) =>
		(e: React.MouseEvent<HTMLDivElement, MouseEvent>): void => {
			e.preventDefault();

			if (key === activeKey) return;

			setActiveKey(key);
			onTabChange && onTabChange(key);
		};

	if (!items?.length) throw new Error('items is null');

	return (
		<Wrapper>
			{items?.map((item, index) => (
				<ItemWrapper key={index} active={activeKey === item.key} onClick={handleItemClick(item.key)}>
					{item.label}
				</ItemWrapper>
			))}
		</Wrapper>
	);
};