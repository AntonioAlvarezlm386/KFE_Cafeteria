import { Button, Dialog, DialogPanel } from "@tremor/react";
import React from "react";


function UpdateDialog({isOpen, handleOpen}) {

  return (
    <>
      <Button className="mx-auto block" onClick={handleOpen}>
        Open Dialog
      </Button>
      <Dialog open={isOpen} onClose={handleOpen} static={true}>
        <DialogPanel>
          <h3 className="text-lg font-semibold text-tremor-content-strong dark:text-dark-tremor-content-strong">
            Account Created Successfully
          </h3>
          <p className="mt-2 leading-6 text-tremor-default text-tremor-content dark:text-dark-tremor-content">
            Your account has been created successfully. You can now login to
            your account. For more information, please contact us.{" "}
          </p>
          <Button className="mt-8 w-full bg-accent hover:bg-secondary" onClick={handleOpen}>
            Actualizar
          </Button>
        </DialogPanel>
      </Dialog>
    </>
  );
}


export default UpdateDialog