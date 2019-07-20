import React from 'react'

export default function ModelCreateInfraccion(props) {
    return (
        <React.Fragment>

            <div class="modal fade" tabindex="-1" role="dialog" id={props.id}>
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title text-primary text-center">Ingreso de Infracciones</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <form>
                                <div class="form-group">
                                    <label for="1" class="sr-only">Código Infracción</label>
                                    <input type="text" class="form-control-plaintext" id="1"
                                        value="Enter email" readonly aria-describedby="codigoHelp" />
                                    <small id="codigoHelp" class="form-text text-muted">El código de la infracción es asignado automáticamente.</small>
                                </div>
                                <div class="form-group">
                                    <label for="1">Nombre Infracción</label>
                                    <input type="text" class="form-control" id="1"
                                        placeholder="Enter email" />
                                </div>

                            </form>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-primary">Save changes</button>
                        </div>
                    </div>
                </div>
            </div>

        </React.Fragment>

    )
}
