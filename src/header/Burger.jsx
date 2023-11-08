import {
    Drawer,
    DrawerBody,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Button,
    Flex,
    InputGroup,
    Input,
    InputRightElement,
    Text,
} from '@chakra-ui/react'
import { useDisclosure } from '@chakra-ui/react'
import { GiHamburgerMenu } from 'react-icons/gi'
import { Link } from 'react-router-dom'

function DrawerExample() {
    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
        <>
            <Button bg={'transparent'} display={{ base: 'flex', md: 'none' }} onClick={onOpen}>
                <GiHamburgerMenu fontSize={'25px'} />
            </Button>
            <Drawer
                isOpen={isOpen}
                placement='left'
                onClose={onClose}
                size={'sm'}
            >
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerBody>
                        <Flex
                            color={'#4B4B4B'}
                            alignItems={'start'}
                            flexDirection={'column'}
                            justifyContent={'space-between'}
                            py={'20px'}
                            w={{ base: '98%', md: '95%', xl: '93%', '2xl': '90%' }}
                            m={'0 auto'}
                        >
                            <Text>Радиаторы</Text>
                            <Text>Полотенцесушители</Text>
                            <Text>конвекторы</Text>
                            <Link style={{
                                padding:'2px 20px',
                                border:'1px solid black',
                                borderRadius:'8px'
                            }} to={'/'}>HOME</Link>
                            <Link style={{
                                padding:'2px 20px',
                                border:'1px solid black',
                                borderRadius:'8px',
                                marginTop:'6px'
                            }} to={'/page2'}>KATALOG</Link>
                            <Text>бренды</Text>
                            <Text>доставка и оплата</Text>
                            <Text>О нас</Text>
                            <Text>контакты</Text>
                        </Flex>
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </>
    )
}
export default DrawerExample;