export const formattingOrders = (item, header) => {
  let show = [ {}, {}, {}, {}, {}, {}];
  if (header) {
    Object.keys(item).forEach((key) => {
      if (key === 'id') {
        show.splice(0, 1, {name: 'Id', size: 'small'});
      } else if (key === 'start_date') {
        show.splice(5, 1, {name: 'Status', size: 'medium'})
      } else if ( key === 'recipient') {
        Object.keys(item[key]).forEach(key1 => {
          if (key1 === 'name') {
            show.splice(1, 1, {name: 'Destinatário', size: 'medium'});
          }
          if (key1 === 'city') {
            show.splice(3, 1, {name: 'Cidade', size: 'medium'} );
          }
          if (key1 === 'state') {
            show.splice(4, 1, {name: 'Estado', size: 'medium'});
          } 
        })        
      } else if (key === 'deliveryman')  {
        Object.keys(item[key]).forEach(key1 => {
          if (key1 === 'name') {
            show.splice(2, 1, { 
              name: 'Entregador',
              size: 'medium',
            });
          }
        })    
      }
    })
    show.push({name: 'Ações', size: 'small'});
  } else {
    let status = {
      start_date: null,
      end_date: null,
      canceled_at: null,
    }
    Object.keys(item).forEach((key) => {
      if (key === 'id') {
        show.splice(0, 1, {name: `#${ item[key]}`, size: 'small'})
      } else if ( key === 'recipient') {
        show.splice(1, 1, {name: item[key].name, size: 'medium'});
        show.splice(3, 1, {name: item[key].city, size: 'medium'});
        show.splice(4, 1, {name: item[key].state, size: 'medium'});
      } else if (key === 'start_date') {
        status[key] = item[key];
      } else if (key === 'end_date') {
        status[key] = item[key];
      } else if (key === 'canceled_at') {
        status[key] = item[key];
      } else if (key === 'deliveryman')  {
        show.splice(2, 1, {
          name: item[key].name,
          size: 'medium',          
          deliveryman: true,
          avatar: item[key].avatar
        });
      }    
    })

    if (status.start_date) {
      show.splice(5, 1, {name: 'RETIRADA', size: 'medium', status: 'withdrawn'})
    }

    if (status.end_date) {
      show.splice(5, 1, {name: 'ENTREGUE', size: 'medium', status: 'delivered'})
    }

    if (status.canceled_at) {
      show.splice(5, 1, {name: 'CANCELADO', size: 'medium', status: 'canceled'})
    }

    if (!status.canceled_at && !status.start_date && !status.end_date) {
      show.splice(5, 1, {name: 'PENDENTE', size: 'medium', status: 'pending'})
    }  
    show.push({name: '...', size: 'small'});
  }
  return show;
}

export const formattingDeliverymans = (item, header) => {
  let show = [{}, {}, {}, {}]
  Object.keys(item).forEach(key => {
    if (key === 'id') {
      show.splice(0, 1, {
        name: header ? 'Id': item[key], 
        size: 'small'
      });
    }
    if (key === 'avatar') {
      show.splice(1, 1, {
        ...show[1],
        name: header ? 'Foto': '',
        avatar: item[key],
        size: 'small',
        deliveryman: true
      });
    }
    if (key === 'name') {
      show.splice(2, 1, {
        name: header ? 'Nome': item[key], 
        size: 'medium'
      });
      show.splice(1, 1, {...show[1], text: item[key] });
    }
    if (key === 'email') {
      show.splice(3, 1, {
        name: header ? 'Email': item[key], 
        size: 'medium'
      });
    }
  });
  show.push({name: header ? 'Ações' : '...', size: 'small'});
  return show;
}

export const formattingRecipients = (item, header) => {
  let show = [];
  if (header) {
    show.push({
      name: 'Id', 
      size: 'small'
    },
    {
      name: 'Nome', 
      size: 'medium'
    },
    {
      name: 'Endereço', 
      size: 'big'
    });
  } else {
    show.push(
      {
        name: item.id, 
        size: 'small'
      },
      {
        name: item.name, 
        size: 'medium'
      },
      {
        name: `${item.street}, ${item.number}, ${item.city} - ${item.state}`, 
        size: 'big'
      },
    );
  }

  show.push({name: header ? 'Ações' : '...', size: 'small'});
  return show;
}

export const formattingProblems = (item, header) => {
  const show = [
    {
      name: header ? 'Encomenda' : item.delivery_id,
      size: 'small',
    },
    {
      name: header ? 'Problema' : item.description,
      size: 'verybig',
    }
  ]
  show.push({name: header ? 'Ações' : '...', size: 'small'});
  return show;
}