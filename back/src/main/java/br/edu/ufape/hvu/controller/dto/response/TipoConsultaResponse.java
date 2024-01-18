package br.edu.ufape.hvu.controller.dto.response;

import java.util.List;

import org.modelmapper.ModelMapper;

import br.edu.ufape.hvu.config.SpringApplicationContext;
import br.edu.ufape.hvu.model.TipoConsulta;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;



@Getter @Setter @NoArgsConstructor
public  class TipoConsultaResponse  {
	private Long id;
	private String tipo;
	private List<AgendamentoResponse> agendamento; 
	private List<VagaResponse> vaga; 



	public TipoConsultaResponse(TipoConsulta obj) {
		ModelMapper modelMapper = (ModelMapper) SpringApplicationContext.getBean("modelMapper");
		modelMapper.map(obj, this);	
	}

}
