// Mensajes Predeterminados PS3 [Spanish LA]
// PS3Xploit Team 2018 / ps3xploit.com

// Translation Credits: @Ripp3RkoS
		

var msg_select_vsh_type="Consola CEX?\n\nal Seleccionar NO se tomaran los offsets para DEX ";
		
var msg_detected_fw_1="FW Detectado: ";
var msg_detected_fw_2=" ";
//var msg_detected_fw_3=" / Version Fabrica: ";
var msg_detected_fw_4=" | Soporta Todos los Modelos con Firmware 4.xx";

var compat_msg_wrong_fw1="Tu PS3 no es Compatible! Tu version de FW Actual es";
var compat_msg_wrong_fw2=", el cual no es compatible con PS3Xploit. Todas las Funciones deshabilitadas";
var compat_msg_success1="Felicidades! Detectamos que tu PlayStation 3 tiene FW ";
var compat_msg_success2=", el cual es Compatible con PS3Xploit! Disfruta!";

var msg_option_not_available="Esta opcion aun no esta disponible!";

// Settings
var msg_settings_load="Esto es experimental y carga opciones desde una cookie!";
var msg_settings_save="Esto es experimental y guarda opciones a una cookie!";

// MinVer/CFW Compatibility
var msg_minver_loaded_into_mem="MinVer Devuelve el valor cargado en memoria!\n\nPresiona nuevamente el Boton Ejecutar para Mostrar el Valor!";
var msg_minver_start="Tu Version Minima para Downgrade es ";
var msg_minver_mid=" y este ";
var msg_minver_end=" a la fecha es compatible con CFW!";

// CELL/RSX Temperatures
var msg_temps_loaded_into_mem="CELL/RSX Temp Devuelve el valor cargado en memoria!\n\nPresiona nuevamente el Boton Ejecutar para Mostrar el Valor!";
var msg_temps_cell="Temperatura Procesador (CELL): ";
var msg_temps_rsx="\n\nTemperatura GPU (RSX): ";
var msg_temps_celcius=" Celcius";

// MemDump
var msg_memdump_warning="Advertencia!\n\nEsta Prueba se colgara si toca un area de memoria sin asignar durante el proceso Dump!\n\nAun asi obtendras un dump valido hasta el cuelgue!";
var msg_memdump_idps_vsh="Solo FW 4.66/4.81/4.82 esta soportado para el Dump  IDPS Directo de Memoria VSH!\n\nLas Cadenas Basadas en la extraccion Flash IDPS es Diferente.\n\nTodas las Demas Versiones de FW probalemente solo den 0.";

// Warnings
var msg_fd_close_warning="Actualmente Los Descriptores de Archivos No se cierran Automaticamente!";
var msg_remove_dir_warning="ADVERTENCIA!\n\nSe cuidadoso con esta syscall.\n\nPodrias eliminar un Directorio Importante y deberas Reinstalar Firmware !";
var msg_warning_write_protection="Proteccion contra Escritura Deshabilitada!\n\nProceda con Cuidado!!!!";

var msg_cobra_only="ALERTA!\n\nEsto solo Funciona con COBRA ACTIVADO EN CFW!";

var msg_mount_test="** En Fase de Prueba **!\n\nEsto Montara /dev_hdd1/\n\nAl Montar, puedes reiniciar el Navegador y usa la Cadena para Lect/Esc. de Archivos para hacer dump de la particion /dev_hdd1/ al destino!";

// File Operations
var msg_default_size="Using Default Size 0x140";
var msg_new_size="New FileSize: 0x";
var msg_default_size="Usando Peso Predet. 0x140";
var msg_new_size="Nuevo Peso: 0x";
var msg_destination_path_incorrect="Directorio Destino Incorrecto!\n\nDebes Fijarlo antes de cambiar la ID del Juego.";

// Trigger Messages
var trigger_msg="Activando Exploit...";
var trigger_msg2="Activado: 0x";

// Search Strings
var msg_search_offsets="<h3><b>Buscando Offsets En Memoria! Espera.... <br>Si te Impacientas, Cierra el Navegador y reintenta en 60-90 Segundos si no los halla!</b></h3>";
var msg_verify_offsets="<h3><b>Verificando Offsets En Memoria! Espera.... <br>Aun NO CIERRES el navegador!</b></h3>";

// Fail Search Messages
var msg_string_verify_fail="<h3><b><font color=%a210003%22>Imposible Verificar todos los Offsets!</font><font color=%227700DA%22> si la verificacion falla nuevamente, Reinicia el Navegador!</b></font></h3>";
var msg_string_verify_fail_max="<h3><b><font color=%a210003%22>Imposible Verificar todos los Offsets!</font><font color=%227700DA%22> Reintentos maximos! Reinicia el Navegador!</b></font></h3>";

// Verify Strings Fail
var msg_string_verify_fail="<h3><b><font color=%a210003%22>Imposible Verificar todos los Offsets!</font><font color=%227700DA%22> si la verificacion falla nuevamente, Reinicia el Navegador!</b></font></h3>";
var msg_string_verify_fail_max="<h3><b><font color=%a210003%22>Imposible Verificar todos los Offsets!</font><font color=%227700DA%22> Reintentos maximos! Reinicia el Navegador!</b></font></h3>";

// Init Success
var msg_success_init="<h3><b><font color=%22386E38%22>SUCCESS!</font><font color=%227700DA%22> <br>Ahora Puedes ejecutar tu Cadena ROP!</font></b></h3>";

// Exec Success
var success_chain_exec="<h3><b><font color=%22386E38%22>Cadena Ejecutada Exitosamente!</font></b></h3>";
var success_chain_exec_press_again="<h3><b><font color=%22386E38%22>Presione el Boton Ejecutar una vez mas!</font></b></h3>";
var success_chain_exec_psid="<h3><b><font color=%22386E38%22>PSID Dump Exitoso!</font></b></h3>";
var success_chain_exec_idps="<h3><b><font color=%22386E38%22>IDPS Dump Exitoso!</font></b></h3>";
var success_chain_exec_memdump="<h3><b><font color=%22386E38%22>DUMP de Memoria Exitoso!</font></b></h3>";
var success_chain_exec_read_write_file="<h3><b><font color=%22386E38%22>Transferencia de Archivos Exitosa !</font></b></h3>";
var success_mount_device="<h3><b><font color=%22386E38%22>Particion /dev_hdd1/ Montada Exitosamente! Reinicia el Navegador y ejecuta la Cadena Lect./Esc. de Archivos.</font></b></h3>";

// Compatibility/Offset Messages
var ua_msg="<hr><h3>Info Navegador PS3: "+navigator.userAgent+ "</h3>";
var compat_msg_nops3="No estas en un sistema PS3! Todas las Funciones Deshabilitadas";
var compat_msg_devs="Esto es solo para desarrolladores!\n\nlos offsets CEX deben agregarse manualmente al archivo /js/chains/offsets.js, basados en tu offsets DEX en uso por cada cadena.";
var experimental="Convierte esta pagina en tu principal!\n\nUsa bajo tu responsabilidad!\nPuede tener Bugs y cosas que no funcionen aun!\n\nSoportados Todos los Modelos con FW  4.xx CEX y 4.81 DEX";

// Other Messages
var msg_prerelease="ESTO ES UNA VERSION ALFA!\n\nSOPORTE PARA FIRMWARES ANTIGUOS ESTA PARCIALMENTE IMPLEMENTADO!\n\n4.81/4.82 SOLO HASTA EL PROXIMO RELEASE!";
var msg_anti_piracy="Descargo de Responsabilidad\n\nNo Aprobamos Ni Apoyamos la pirateria de cualquier tipo!\n\nal Usar este Tutorial, y aceptar, Acuerdas usarlo con fines didacticos!";
var msg_anti_piracy_edat="Descargo de Responsabilidad ANTIPIRATERIA!\n\nEsta Opcion esta pensada solo para pruebas y desarrollo, Y no debe abusar de ella!\n\nAl clicar en SI Aceptas Usarlo solo en Titulos que ya compraste!";

var msg_thread_name="Hello_From_PS3Xploit";

// Devices
var msg_device_loaded_into_mem="Valor de Retorno de dispositivo Cargado en memoria!\n\nPresiona nuevamente el boton ejecutar para leer y mostrar en pantalla!";
var msg_get_device_info1="Retorno de Dispositivo: ";
var msg_get_device_info2="\n\nUsa para cadena sys_storage_report_devices";

// Debugging

var msg_debug_placeholder="Lazy XP +1";

ar msg_stackframe_check="Esto Comprobara el Marco de Pila Predeterminado .\n\nSi se cuelga o no muestra el Mensaje exito, entonces hay un problema!";

// String Matching
var msg_stackframe_check="Esto Comprobara el Marco de Pila Predeterminado .\n\nSi se cuelga o no muestra el Mensaje exito, entonces hay un problema!";
// String Matching
var verify_fail="<font color=%a210003%22>FALLO: Cadenas No coinciden en memoria!</font>";
var verify_success="<font color=%222a1003%22>EXITO: Cadenas Halladas en Memoria!</font>";
var verify_skip="<font color=%222a1003%22>EXITO: Cadenas sin verificar en Memoria!</font>";

var msg_search_flash_type_start="Parametros de Busqueda para";
var msg_search_flash_type_end=" tipo de Flasheo!";

var msg_check_memory="Chequeo de Memoria: ";
var msg_chk_mem_arg_error="Error de Argumentos para Chequeo de Memoria! peso=0x";
var msg_malformed_html="HTML Malformado!";
var msg_string_located=" Hallado en offset: 0x";
var msg_string_not_located="no es posible encontrar en Rango";

// Found Offsets
var msg_found_offsets="Offsets Hallados: ";
var msg_verified_offsets="Offsets Verificados: ";
var offset_find_success="Exito";
var offset_find_base_fp="base_fp";
var offset_find_stack_frame="stack_frame";
var offset_find_jump2="jump2";
var offset_find_jump1="jump1";


var msg_page_args_not_set="Argumentos de Pagina no establecidos!\n\nClic en Establecer argumentos y reintenta!";
var msg_no_chain_selected="sin Cadena ROP Chain Seleccionada\n\nUsa la ventana desplegable para seleccionar una";
var msg_media_not_supported="Este medio de almacenamiento aun no esta implementado!";
var msg_cannot_continue="No se puede Continuar....Regresando!";

var msg_invalid_title_id="ALERTA!\n\nLa ID del Titulo Introducido es Incorrecto!\n\nUsando ID Predeterminada.";


// index GUI text
var gui_title="Plantilla para Tutorial PS3Xploit <font color=%22000000%22>v0.0.9</font>";
var gui_team="por PS3Xploit Team: <b><font color=%227700DA%22>W</font><font color=%22FFFFFF%22> | </font><font color=%227700DA%22>esc0rtd3w</font><font color=%22FFFFFF%22> | </font><font color=%227700DA%22>habib</font><font color=%22FFFFFF%22> | </font><font color=%227700DA%22>bguerville</font></b>";
var gui_credits="<b>Agradecimientos a xerpi por el port del exploit de memoria de usuario del PS3, a zecoxao y Joonie por su soporte temprano y continuo, mysis por documentar vsh exports y plugins, desde luego a los contribuidores del psdevwiki, a STLcardsWS por su prologada y efectiva contribucion y a toda la Comunidad PS3 de Hackers/Desarrolladores pasados y presentes, Tu sabes quien eres. Gracias tambien a littlebalup por dar la idea y la implementacion js que usamos para elaborar la edicion HDD de Dumpers y Flasher. gracias ademas a B7U3 C50SS, Endless, y 0x1991337 por testear los syscall del tutorial  y otra ayuda!</font> <font color=%22white_smaller%22><b>Mas Detalles y Noticias en <a href=%22http://www.psx-place.com%22>http://www.psx-place.com</a>. Sitio Oficial <a href=%22http://ps3xploit.com%22>http://ps3xploit.com</a></b>";

// Checkboxes First Section
var gui_chk_default_settings="Configuracion Predet.:";
var gui_chk_disable_trigger="Deshabilitar Lanzador:";
var gui_chk_write_protect="Protec. Escritura";
var gui_chk_flash_type_nand="NAND:";
var gui_chk_flash_type_nor=" &nbsp NOR:";
var gui_chk_flash_type_emmc=" &nbsp eMMC:";

// Reboot Mode
var gui_chk_reboot_mode="Modo de Reinicio:";
var gui_chk_reboot_mode_select="* Seleccione Modo *";
var gui_chk_reboot_mode_soft="Reinicio Suave (XMB)";
var gui_chk_reboot_mode_hard="Reinicio Completo";
var gui_chk_reboot_mode_off="Apagar";


// ROP Chain Text

// Preset Chains
var gui_txt_preset_chains="Cadenas Predet.: ";
var gui_txt_preset_chains_default="Prueba/Predet";
var gui_txt_option_stackframe_test="Prueba de Marco de Pila";
var gui_txt_option_beep_test="Prueba Bips";
var gui_txt_option_power_test="Prueba de Energia";
var gui_txt_option_minver_check="Version Minima de Fabrica";
var gui_txt_option_sys_game_get_temperature="Mostrar Temperatura";
var gui_txt_option_console_write_test="Prueba de Escritura en Consola";
var gui_txt_option_sys_tty_read="Prueba de Lectura TTY";
var gui_txt_option_sys_tty_write="Prueba de Escritura TTY";

// Dumping
var gui_txt_preset_chains_dumping="Dumping";
var gui_txt_option_system_info_multi_dump="Informacion de Multi Dump";
var gui_txt_option_dump_lv2_syscall_table="Dump Tabla Syscall LV2";
var gui_txt_option_mem_dump_test="Dump (Raw) de memoria VSH";
var gui_txt_option_get_open_psid="Dump PSID";
var gui_txt_option_dump_idps_from_mem="Dump IDPS de VSH";
var gui_txt_option_sys_net_dump="SysNet Dump";
var gui_txt_option_dump_idps_from_flash="Dump IDPS de Flash";

// File System
var gui_txt_preset_chains_file_system="Sistema de Archivos";
var gui_txt_option_db_rebuild="Reconstruir BD";
var gui_txt_option_file_read_write_test="Prueba de Lectura/Escritura (Archivos)";
var gui_txt_option_dir_read_write_test="Prueba de Lectura/Escritura (Directorios)";

// Fun
var gui_txt_preset_chains_fun="Fun";
var gui_txt_option_fun_test="Prueba Bips";


// Other Syscall Chains

// Memory/System
var gui_txt_syscall_group_mem_sys="Memoria/Sistema: ";
var gui_txt_syscall_chains_mem_sys="Memoria";
var gui_txt_option_sys_rsx_memory_free="sys_rsx_memory_free";

// Storage
var gui_txt_syscall_chains_storage="Almacenamiento";
var gui_txt_option_sys_storage_report_devices="sys_storage_report_devices";
var gui_txt_option_sys_storage_open="sys_storage_open";
var gui_txt_option_sys_storage_read="sys_storage_read";
var gui_txt_option_sys_fs_chmod="sys_fs_chmod";
var gui_txt_option_sys_fs_chown="sys_fs_chown";
var gui_txt_option_sys_fs_get_fs_info="sys_fs_get_fs_info";
var gui_txt_option_sys_fs_get_mount_info="sys_fs_get_mount_info";
var gui_txt_option_sys_fs_link="sys_fs_link";
var gui_txt_option_sys_fs_mapped_allocate="sys_fs_mapped_allocate";
var gui_txt_option_sys_fs_mapped_free="sys_fs_mapped_free";
var gui_txt_option_sys_fs_mkdir="sys_fs_mkdir";
var gui_txt_option_sys_fs_mount="sys_fs_mount";
var gui_txt_option_sys_fs_rename="sys_fs_rename";
var gui_txt_option_sys_fs_rmdir="sys_fs_rmdir";
var gui_txt_option_sys_fs_stat="sys_fs_stat";
var gui_txt_option_sys_fs_symbolic_link="sys_fs_symbolic_link";
var gui_txt_option_sys_fs_unlink="sys_fs_unlink";
var gui_txt_option_sys_fs_unmount="sys_fs_unmount";

// System
var gui_txt_syscall_chains_system="Sistema";
var gui_txt_option_sys_ss_utoken_if="sys_ss_utoken_if";


// Process/Thread

// Process
var gui_txt_syscall_group_proc_thread="Procesos/Hilos: ";
var gui_txt_syscall_chains_proc_thread="Procesos";
var gui_txt_option_sys_process_exit="sys_process_exit";
var gui_txt_option_sys_process_kill="sys_process_kill";

var gui_txt_syscall_chains_process="ID de Proc.";

// Threads
var gui_txt_syscall_chains_threads="Hilos";
var gui_txt_option_ppu_thread_get_priority="thread_get_priority";
var gui_txt_option_ppu_thread_get_stack_info="thread_get_stack_info";
var gui_txt_option_sys_ppu_thread_create="sys_ppu_thread_create";
var gui_txt_option_sys_ppu_thread_exit="sys_ppu_thread_exit";
var gui_txt_option_sys_ppu_thread_restart="sys_ppu_thread_restart";
var gui_txt_option_sys_ppu_thread_start="sys_ppu_thread_start";
var gui_txt_option_sys_ppu_thread_stop="sys_ppu_thread_stop";

// Thread ID
var gui_txt_syscall_chains_thread_id="ID Hilos";


// Network
var gui_txt_syscall_group_network="RED: ";
var gui_txt_syscall_chains_sys_net="sys_net";
var gui_txt_option_sys_net_open_dump="sys_net_open_dump";
var gui_txt_option_sys_net_read_dump="sys_net_read_dump";
var gui_txt_option_sys_net_write_dump="sys_net_write_dump";
var gui_txt_option_sys_net_close_dump="sys_net_close_dump";

var gui_txt_option_url="URL: ";


// Debugging
var gui_txt_syscall_group_debugging="Depuracion: ";
var gui_txt_syscall_chains_debug_sc="System Calls";
var gui_txt_option_debug_placeholder="beep_test";


// LED Control
var gui_txt_syscall_group_led="Control de LEDS:";
var gui_txt_syscall_chains_led="* Selecciona Cadena *";
var gui_txt_option_sys_sm_request_led="sys_sm_request_led";
var gui_txt_option_sys_sm_control_led="sys_sm_control_led";

var gui_txt_syscall_chains_led_color="Cambiar Color";
var gui_txt_option_led_color_green="Verde";
var gui_txt_option_led_color_yellow_red="Amarillo/Rojo";
var gui_txt_option_led_color_off="Apagado";

var gui_txt_syscall_chains_led_action="Cambiar Accion";
var gui_txt_option_led_action_on="Encendido";
var gui_txt_option_led_action_off="Apagado";
var gui_txt_option_led_action_blink_fast="Parpadeo Rapido";
var gui_txt_option_led_action_blink_slow="Parpadeo Lento";


// Beep Parameters
var gui_txt_syscall_group_beep_params="Parametros de Bips: ";
var gui_txt_syscall_chains_beeps="# de Bips";
var gui_txt_option_beep_off="Apagar";
var gui_txt_option_beep_3="3 Bips";
var gui_txt_option_beep_2="2 Bips";
var gui_txt_option_beep_2f="2 Bips Rapidos";
var gui_txt_option_beep_1="1 Bip";
var gui_txt_option_beep_1f="1 Bip Rapido";
var gui_txt_option_beep_flatline="Continuos";


// Memory Dump
var gui_txt_syscall_group_memdump="Dump de Memoria:";
var gui_txt_memdump_addresses="Direccion MemDump";
var gui_txt_memdump_size="Peso MemDump";
var gui_txt_memdump_range_presets="Presets:";
var gui_txt_option_memdump_presets_default="* Sin Preset Seleccionados *";

var gui_txt_memdump_address_start="Inicio:";
var gui_txt_memdump_address_end="Fin:";
var gui_txt_btn_memdump_set_values="Fijar Nuevos Valores";


var gui_txt_group_user_id="ID Usuario:";
var gui_txt_option_user_id_default="* Preseterminado *";


var gui_txt_group_permissions="Permisos:";
var gui_txt_option_chmod="chmod";
var gui_txt_option_chown="chown";

var gui_txt_group_filesize="Peso Archivo 0x:";
var gui_txt_group_titleid="ID del Juego:";

var gui_txt_btn_set_filesize="Establecer";
var gui_txt_btn_set_titleid="Establecer";

var gui_txt_group_path_source="Origen:";
var gui_txt_group_path_destination="Destinatino: &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp";

// XMB Transfer
var gui_txt_syscall_group_xmb_transfer="Opciones Transferencia XMB ";
var gui_txt_option_xmb_photo="Foto";
var gui_txt_option_xmb_music="Musica";
var gui_txt_option_xmb_video="Video";
var gui_txt_option_xmb_jpg_btn="Presiona &#x25B3 Para JPG";
var gui_txt_option_xmb_mp3_btn="Presiona &#x25B3 Para MP3";
var gui_txt_option_xmb_mp4_btn="Presiona &#x25B3 Para MP4";
var gui_txt_option_xmb_save_msg="&#x2192 Archivo &#x2192 Destino Guardado &#x2192 Almacenamiento de Sistema";

var gui_txt_group_payload_type="Tipo Payload ";
var gui_txt_group_payload_type_help="<b><i>reemplaza los payloads predeterminados con los tuyos, usando los mismos nombres, y ubicandolos en la carpeta TEMPLATE/payloads/ de tu HTML </b></i>";


// String Search
var gui_txt_group_string_search="Busqueda:";
var gui_txt_option_search_size="Peso";
var gui_txt_option_search_base="Base";
var gui_txt_option_search_stack="Pila (Stack)";
var gui_txt_option_search_range="Rango";
var gui_txt_option_search_loops="Iteraciones";

var gui_chk_search_verify_jumps="Verificar Jumps:";
var gui_chk_search_verify_stackframe="Marco de Pila:";
var gui_chk_search_debug_output="Depurar:";

var gui_txt_search_found_offsets="<b>Offsets Hallados: base_fp: 0x0 | stack_frame_addr: 0x0 | jump_2_addr: 0x0 | jump_1_addr: 0x0</b>";

// Buttons
var gui_txt_option_init_rop_btn="Iniciar Cadena ROP";
var gui_txt_option_exec_rop_btn="Ejecutar Cadena ROP";
var gui_txt_option_reload_page_btn="Recargar Pagina";
var gui_txt_option_reset_btn="Reiniciar Opcioness";
var gui_txt_option_load_settings_btn="Cargar Configuracion";
var gui_txt_option_save_settings_btn="Guardar Configuracion";
var gui_txt_option_debug_show_var_btn="Mostrar Todas las Variables";






