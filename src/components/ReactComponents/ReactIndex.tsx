import {Button, Chip, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, useDisclosure} from "@nextui-org/react";
import {useStore} from "../../App";
import {useEffect} from "react";
import {Skills} from "./dialogComponents/Skills";


export const ReactIndex = () => {
  const {dialogKey,setDialogKey} = useStore()
  const {isOpen, onOpen, onClose} = useDisclosure({
    onClose() {
      setDialogKey("")
    }
  });

  useEffect(() => {
    if (!!dialogKey){
      onOpen()
    }else {
      onClose()
    }
  }, [dialogKey]);

  return (
    <main >
      <Modal backdrop={"blur"} isOpen={isOpen} onClose={onClose} size={"2xl"}>
        <ModalContent>
          {() => (
            <>
              <ModalHeader className="flex flex-col gap-1">{dialogKey}</ModalHeader>
              <ModalBody>
                {dialogKey === "Skills"? <Skills/>:"aa"}
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </main>
  );
}