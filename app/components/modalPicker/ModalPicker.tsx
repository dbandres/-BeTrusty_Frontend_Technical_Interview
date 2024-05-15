import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button } from "@nextui-org/react";
import { RangeCalendar } from "@nextui-org/calendar";
import { today, getLocalTimeZone } from '@internationalized/date';

export const ModalPicker = ({ isOpen, onOpenChange, setCheckin, setCheckout }: { isOpen: boolean, onOpenChange: (isOpen: boolean) => void, setCheckin: any, setCheckout: any }) => {

  return (
    <Modal isOpen={isOpen} onOpenChange={onOpenChange} isDismissable={false} isKeyboardDismissDisabled={true} className="bg-[#0F172A]">
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-1">Elija el periodo de su estadia</ModalHeader>
            <ModalBody>
              <div className=" flex justify-center">
                <RangeCalendar
                  aria-label="Date (Uncontrolled)"
                  defaultValue={{
                    start: today(getLocalTimeZone()),
                    end: today(getLocalTimeZone()),
                  }}
                  minValue={today(getLocalTimeZone())}
                  onChange={(value) => {
                    setCheckin(value.start);
                    setCheckout(value.end);
                  }}
                />
              </div>
            </ModalBody>
            <ModalFooter>
              <Button color="danger" variant="light" onPress={onClose}>
                Cerrar
              </Button>
              <Button color="primary" onPress={onClose}>
                Confirmar
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  )
}