import { AppShell, Burger } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";

export const Home = () => {
    const [opened, { toggle }] = useDisclosure();

    return(
        <AppShell
            header={{ height: 60}}
            navbar={{
                width: 300,
                breakpoint: 'sm',
                collapsed: { mobile: !opened},
            }}
            padding="md"
        >
            <AppShell.Header>
                <Burger
                    opened={opened}
                    onClick={toggle}
                    hiddenFrom="sm"
                    size="sm"
                />
                <div>Logo Here</div>
            </AppShell.Header>

            <AppShell.Navbar p="md">Navbar Bruh</AppShell.Navbar>

            <AppShell.Main>Main Content Area Here</AppShell.Main>
        </AppShell>
    );
}