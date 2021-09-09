import { Story, Meta } from "@storybook/react/types-6-0";
import styles from "../styles/link.module.scss";

export default {
    title: "Link",
} as Meta;

const Template: Story = () => <span className={styles.link}>Какая-то ссылка</span>;

export const Base = Template.bind({});
